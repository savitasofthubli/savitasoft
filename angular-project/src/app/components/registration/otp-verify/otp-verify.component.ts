import { Coursedetail } from './../../coursedetails/coursedetails.component';

import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { PhoneVerifyService } from 'src/app/services/phone-verify.service';
import { RegisterService } from 'src/app/services/register.service';
//import { RegisterForm } from '../register-form/register-form.component';

export interface Otp{
  otp: string;
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
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent {
 // @Output() event = new EventEmitter<string>();
  form= new FormGroup({
    otp: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(6)]),
    name:  new FormControl<any>(null,Validators.required),
    phoneNumber: new FormControl<any>(null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    whatsappNumber: new FormControl(<any>null,Validators.required),
    college: new FormControl<any>(null,Validators.required),
    branch: new FormControl<any>(null,Validators.required),
    semester: new FormControl<any>(null,Validators.required),
    address: new FormControl<any>(null,Validators.required),
    parentNumber:new FormControl<any>(null,Validators.required),
    email: new FormControl<any>(null,[Validators.required,Validators.email]),
    courses:new FormGroup({
      id: new FormControl(),
      name:new FormControl()
    })
 });

 coursedetail : RegisteredCourse[]=[];
 notstudent:RegisteredCourse[]=[];

 otpview:boolean=true;
 registerform:RegisterForm={
   name: '',
   phoneNumber: '',
   whatsappNumber: '',
   college: '',
   branch: '',
   semester:null ,
   address: '',
   email: '',
   parentNumber: '',
   courses: []
 }
 registerview:boolean=false;

  constructor(private phoneVerify: PhoneVerifyService, private router: Router, private registerService:RegisterService,private courseservice:CourseServiceService){
    // this.courseservice.getcourses((data:any)=>{
    //     this.coursedetail=data;
    //   })
  }


  public get otp(){
    return this.form.get('otp');
  }

  // check(retval:any):boolean{
  //   if(retval==="Valid otp!"){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  onClick(data: string)
  {
     let maindata:any = Object.assign(data,this.phoneVerify.getNumber());
     console.log(maindata);
     this.phoneVerify.postOtp(maindata).subscribe((response:any)=>{
        alert("Otp is validated")
        console.log(response);
       // alert("Otp is validated")
        this.registerform=response;
          this.courseservice.getcourses((data:any)=>{
        this.coursedetail=data;
        localStorage.setItem('coursedetail',JSON.stringify(this.coursedetail))
      })
        this.studentcourse(response);
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
     // this.form.reset();
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

  postdata(data:any){
    this.registerService.postregister(data).subscribe((response)=>{
      console.log(response);

      alert("data sent successfully");
      }),
      (error:HttpErrorResponse)=>{
        if(error.status==500){
          console.log("error resolved")
          alert("data sent successfully");
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


public studentcourse(scourse){

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

  localStorage.setItem('')

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

}
