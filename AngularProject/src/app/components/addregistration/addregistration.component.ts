import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course, CourseRegistration, Registration } from '../../commons/common_interfaces'
import { CustomValidators } from 'src/app/commons/CustomValidators';
import { RegistrationService } from 'src/app/services/registration.service';
import { CourseService } from 'src/app/services/course.service';
import { User } from 'src/app/commons/common_interfaces';
import { LoginService } from 'src/app/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addregistration',
  templateUrl: './addregistration.component.html',
  styleUrls: ['./addregistration.component.css']
})
export class AddregistrationComponent {

  registrations :any[]=[]
  registration: any={}
  courses : Course[]=[]
  
  viewComponent :string='displayall'
  phoneExist : boolean=false;
  passwordView : boolean = false;
  formView : boolean = false;
  courseView : boolean = false;
  passwordInvalid : boolean = false;
  disableFormView : boolean = false;
  newUser : boolean = false;
  invalidres:boolean=false;
  submitbtn:boolean=true;

  
  constructor(private registrationService : RegistrationService,
              private courseService : CourseService,
              private loginService : LoginService,
              private router:Router ){
    
    courseService.getAllCourses((response : any)=>this.courses = response);
  }

  formGroup :FormGroup=new FormGroup({
    name : new FormControl('',[Validators.required,Validators.pattern("[A-Z a-z]*")]),
    phoneNumber : new FormControl('',[Validators.required,Validators.pattern("[0-9+]*"),Validators.maxLength(10)]),
    email : new FormControl('',[Validators.required,Validators.email,Validators.pattern("[A-Za-z0-9]*@[A-Za-z]*.[a-z]*")],CustomValidators.registrationExist(this.registrationService)),
    address :new FormControl('',[Validators.required,Validators.pattern("[A-Z a-z]*")]),
    whatsappNumber : new FormControl('',[Validators.required,Validators.pattern("[0-9+]*")],CustomValidators.registrationExist(this.registrationService)),
    college : new FormControl('',[Validators.required,Validators.pattern("[A-Z a-z]*")]),
    branch : new FormControl('',[Validators.required]),
    semester : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    parentNumber : new FormControl('',[Validators.required,Validators.pattern("[0-9+]*")]),

  });

  public transferRegistrationToFormgroup(registration : Registration){
    console.log(this.name)
    this.name?.setValue(registration.name);
    this.email?.setValue(registration.email);
    this.address?.setValue(registration.address);
    this.whatsappNumber?.setValue(registration.whatsappNumber);
    this.college?.setValue(registration.college);
    this.branch?.setValue(registration.branch);
    this.semester?.setValue(registration.semester);
    this.parentNumber?.setValue(registration.parentNumber);
    this.formGroup.disable();
  }

  public blankFormGroup(){
    this.name?.setValue("");
  }

  formCourses : FormArray<FormControl> = new FormArray<FormControl>([]);

  public get name()
  {
    return this.formGroup.get('name')
  }
  public get college()
  {
    return this.formGroup.get('college')
  }
  public get whatsappNumber()
  {
    return this.formGroup.get('whatsappNumber')
  }
  public get phoneNumber()
  {
    return this.formGroup.get('phoneNumber')
  }
  public get parentNumber()
  {
    return this.formGroup.get('parentNumber')
  }
  public get address()
  {
    return this.formGroup.get('address')
  }
  public get branch()
  {
    return this.formGroup.get('branch')
  }
  public get email()
  {
    return this.formGroup.get('email')
  }
  public get password()
  {
    return this.formGroup.get('password')
  }
  public get semester()
  {
    return this.formGroup.get('semester')
  }

  public onAddCourse(course : HTMLSelectElement){
    console.log(course.value);
     this.formCourses.push(new FormControl ({"id": course.value}))
  }


  public onSaveStudent(){
    console.log(this.formGroup.value)
  }
  public formArrayControls() : any
  {
    return(this.formGroup.get('courses') as FormArray).controls
  }

  public getCourseName(obj : any) : string{
    let id : number = obj.id;
    let ret : string = ""
    for(let i=0;i<this.courses.length;i++){
      if(this.courses[i].id == id){
        ret =  this.courses[i].name;
        break;
      }
    }
    return ret;
  }
  


  public addRegistration()
  {
    if(this.phoneExist){
      this.formCourses.controls.forEach(element => {
        let crdata : CourseRegistration = {
          id : 0,
          courseRegistrationDate : new Date,
          registration : this.registration,
          course : element.value
        }
        this.registrationService.addCourseRegistration(crdata,(response : any)=>console.log(response));
      });
    }
    else{
      console.log(JSON.stringify(this.formGroup.value))
      this.registrationService.addRegistration(this.formGroup.value,(response : any)=>{
        this.registration = response;
  
        this.formCourses.controls.forEach(element => {
          let crdata : CourseRegistration = {
            id : 0,
            courseRegistrationDate : new Date,
            registration : this.registration,
            course : element.value
          }
          this.registrationService.addCourseRegistration(crdata,(response : any)=>console.log(response));
        });
      })
    }
    alert("Registered Successfully")
    this.router.navigate(['/home']);
    
  }

  public onPhoneFocus() : void {
    this.phoneExist = false;
    this.passwordView = false;
    this.formView = false;
    this.courseView = false;
  }

  public onPhoneBlur(phone : string) : void {
    this.registrationService.checkRegistrationByPhone(phone,(response : any)=>{
      if(response){
        this.submitbtn = false;
        this.phoneExist = true;
        this.registrationService.getRegistrationByPhone(phone,(res:any)=>{
          this.registration=res;
          this.transferRegistrationToFormgroup(res);
         this.formView = true;
          this.courseView = true;
        })
        ,
        (error:HttpErrorResponse)=>{
          if(error)
              this.invalidres=true;
      }
        this.newUser = false;
      }else{
        this.submitbtn = false;
        this.newUser = true;
        this.phoneExist = false;
      }
    })
   
  }

  public onPhoneClick(){
    this.formGroup.enable();
  }

  onLoginClick(phone : string, password : string){
    let user : User = {phone : phone , password : password};
    console.log(user);
    this.loginService.login(user,(response : any)=>{
      console.log(JSON.stringify(response));
      if(response == null)
        this.passwordInvalid = true;
      else{
          this.disableFormView = false;
          this.registrationService.getRegistrationByPhone(phone,(response : any)=>{
            this.registration = response;
            this.transferRegistrationToFormgroup(response);
            this.formView = true;
            this.courseView = true;
        })
      }
    })
  }

  public onResetClick(txtphone : HTMLInputElement){
    this.formGroup.enable();
    txtphone.focus();
  }
}
