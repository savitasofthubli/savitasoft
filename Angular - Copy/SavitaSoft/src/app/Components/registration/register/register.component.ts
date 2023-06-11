import { Component } from '@angular/core';
<<<<<<< HEAD
import { Student } from '../../Objective/Common.objects';
=======
>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../Courses/courses.service';
import { PhoneServiceService } from 'src/app/Services/phone-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/Services/register-service.service';
<<<<<<< HEAD

export interface Otp{
  otp: string;
=======
import { Otp } from '../../common/common.object';

export interface Otp1{
  otp1: string;
>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4
}

export interface RegisteredCourse{
  id:number;
  name:string;
  description:string;
  duration:string;
  courseType:string;
  fees:number

}

export interface RegisterForm{
  name: string;
  phoneNumber: string;
  whatsappNumber: string;
  college: string;
  branch: string;
  semester: number;
  address: string;
  email: string;
  parentNumber:string;
  courses : RegisteredCourse[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

<<<<<<< HEAD
  public onkeyup1(txt: HTMLInputElement) : void {
    txt.focus();
  }
=======

>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4
 
  otp :Otp ={txt1:"",txt2:"",txt3:"",txt4:"",txt5:"",txt6:"",total:""};

  public onMaskBlur() :void{
    this.otp.total=this.otp.txt1+this.otp.txt2+this.otp.txt3+this.otp.txt4+this.otp.txt5+this.otp.txt6;
  }
  public displayotp(): void{
    console.log(JSON.stringify(this.otp.total)); 

    // this.otp.txt1="";this.otp.txt2="";this.otp.txt3="";this.otp.txt4="";this.otp.txt5="";this.otp.txt6="";this.otp.total="";
  }
  public clearotp():void{
   
  }

  otpForm= new FormGroup({
<<<<<<< HEAD
    otp: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(6)])
=======
    otp1: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(6)])
>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4
  })

  form= new FormGroup({
    name:  new FormControl<any>(null,Validators.required),
    phoneNumber: new FormControl<any>(null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    whatsappNumber: new FormControl(<any>null,Validators.required),
    college: new FormControl<any>(null,Validators.required),
    branch: new FormControl<any>(null,Validators.required),
    semester: new FormControl<any>(null,Validators.required),
    address: new FormControl<any>(null,Validators.required),
    parentNumber:new FormControl<any>(null,Validators.required),
    email: new FormControl<any>(null,[Validators.required,Validators.email]),
    courses:new FormArray([])
 });

 public get courses(): FormArray{
  return this.form.get('courses') as FormArray;
 }

 coursedetail : RegisteredCourse[]=[];
 notstudent:RegisteredCourse[]=[];

 otpview:boolean=true;

 registerform:RegisterForm={
   name: '',
   phoneNumber: '',
   whatsappNumber: '',
   college: '',
   branch: '',
<<<<<<< HEAD
   semester: 0,
=======
   semester:0,
>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4
   address: '',
   email: '',
   parentNumber: '',
   courses: []
 }
 
 registerview:boolean=false;

<<<<<<< HEAD
  constructor(private phoneVerify: PhoneServiceService, private router: Router, private registerService:RegisterServiceService,private courseservice:CourseServiceService){
=======
  constructor(private phoneVerify: PhoneServiceService, private router: Router, private registerService:RegisterServiceService,private courseservice:CourseService){
>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4
    this.courseservice.getcourses((data:any)=>{
        this.coursedetail=data;
      })
  }

  
<<<<<<< HEAD
  public get otp(){
    return this.form.get('otp');
  }

  onClick(data: string)
  {
     let maindata:any = Object.assign(data,JSON.parse(this.phoneVerify.getNumber()));
     console.log(maindata);
     this.phoneVerify.postOtp(maindata).subscribe((response:RegisterForm)=>{
=======
  public get tp1(){
    return this.form.get('otp1');
  }

  onClick()
  {
     var data=this.otp.total;
     let otp2 = {"otp":data}
     let maindata:any = Object.assign(otp2,JSON.parse(this.phoneVerify.getNumber()));
     console.log(maindata);
     this.phoneVerify.postOtp(maindata).subscribe((response:any)=>{
>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4
        alert("Otp is validated")
        console.log(response);
       // alert("Otp is validated")
        this.registerform=response;
        this.transferResponseToForm(response);
       // this.router.navigate(['phoneNumberVerify/otpVerify/registerForm']);
        this.phoneVerify.clear();
       // this.registerService.setData(response);
       // this.event.emit(this.registerService.getData());
        this.otpview=false;
        this.registerview=true;
      
     
    },
    (error : HttpErrorResponse)=>{
      // console.log(error);
      // alert("Otp is invalid");
      this.form.reset();
      if(error.status==404){
        console.log("error resolved")
        alert("Otp is validated")
        this.otpview=false;
        this.registerview=true;
      }
    });
        // if(this.check(retval)){
        //   alert("Phone number verified successfully");
        //   this.router.navigate(['registerForm']);
        // }else{
        //   alert("Invalid otp.Verify again");
        // }
        
   

    

    // this.phoneVerify.getData((data:any)=>{
    //    if(data!==null){  
    //       this.registerService.setData(data);
    //    }
    // });

  }
  // senddata(){
  //   //let data2=this.registerService.getData();
  //   this.event.emit(this.registerService.getData());
  // }

  onClick2()
  {
    console.log(JSON.parse(this.phoneVerify.getNumber()));
    this.phoneVerify.postNumber(JSON.parse(this.phoneVerify.getNumber()),(retval:any)=>{
      console.log(retval);
      alert("Otp sent to your phone number successfully");
    });
  }

  postdata(data:RegisterForm){
<<<<<<< HEAD
=======

    data.courses = [{id:1,name:'', description:'', duration:'', courseType:'', fees:0}]
>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4
    console.log(JSON.stringify(data));
    this.registerService.postregister(data).subscribe((response)=>{
      console.log(response);
      alert("data sent successfully");
      this.router.navigate(['/home']);
      }),
      (error:HttpErrorResponse)=>{
        if(error.status==500){
          console.log("error resolved")
          alert("data sent successfully");
          this.router.navigate(['/home']);
        }
      }
  
}

    public get id(){
      return this.form.get('id');
    }

    public get name(){
      return this.form.get('name');
    }

    public get description(){
      return this.form.get('description');
    }

    public get duration(){
      return this.form.get('duration');
    }

    public get courseType(){
      return this.form.get('courseType');
    }

    public get fees(){
      return this.form.get('fees');
    }


public studentcourse(scourse: any){

  let k=0;
  for(let i=0;i<scourse.courses.length;i++)
  {
    for(let j=0;j<this.coursedetail.length;j++)
    {
      if(scourse.courses[i].id!==this.coursedetail[j].id)
      {
        this.notstudent[k]=this.coursedetail[j];
        k++;
      }
    }
  }

}
  



    public onkeyup1(txt : HTMLInputElement) : void {
      txt.focus();
    }
    public onkeyup2(txt : HTMLInputElement) : void {
      txt.focus();
    }
    public onkeyup3(txt : HTMLInputElement) : void {
      txt.focus();
    }
    public onkeyup4(txt : HTMLInputElement) : void {
      txt.focus();
    }
    public onkeyup5(txt : HTMLInputElement) : void {
      txt.focus();
    }

<<<<<<< HEAD
    public transferResponseToForm(response : RegisterForm){
      this.form.get('name').setValue(response.name);
      this.form.get('address').setValue(response.address);
      this.form.get('phoneNumber').setValue(response.phoneNumber);
      this.form.get('whatsappNumber').setValue(response.whatsappNumber);
      this.form.get('email').setValue(response.email);
      this.form.get('branch').setValue(response.branch);
      this.form.get('college').setValue(response.college);
      this.form.get('parentNumber').setValue(response.parentNumber);
      this.form.get('semester').setValue(response.semester);
    }
=======
  public transferResponseToForm(response:RegisterForm){
     
    this.form.get('name')?.setValue(response.name);
    this.form.get('address')?.setValue(response.address);
    this.form.get('phoneNumber')?.setValue(response.phoneNumber);
    this.form.get('parentNumber')?.setValue(response.parentNumber);
    this.form.get('whatsappNumber')?.setValue(response.whatsappNumber);
    this.form.get('semester')?.setValue(response.semester);
    this.form.get('college')?.setValue(response.college);
    this.form.get('branch')?.setValue(response.branch);
    this.form.get('email')?.setValue(response.email);

  }
>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4


  
}
