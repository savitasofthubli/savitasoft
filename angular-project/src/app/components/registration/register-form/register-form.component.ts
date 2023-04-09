import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

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
  cid: number;
  cname: string;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
    form= new FormGroup({
    name: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    whatsappNumber: new FormControl('',Validators.required),
    college: new FormControl('',Validators.required),
    branch: new FormControl('',Validators.required),
    semester: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    parentNumber:new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    course:new FormGroup({
      cid: new FormControl()
    })
 });
  
 registerform:RegisterForm;

constructor( private registerService:RegisterService){}
   
getdata()
{
 this.registerform= this.registerService.getData();
}

postdata(data:any){
  if(this.registerService.getData()){
    this.registerService.postregister( this.registerService.getData(),(retval:any)=>{
    console.log(retval);
    alert("data sent successfully");
    });
  }else{
    this.registerService.postregister( data,(retval:any)=>{
      console.log(retval);
      alert("data sent successfully");
      });
  }
}
 public get name(){
  return this.form.get('name');
}
public get phonenumber(){
  return this.form.get('phonenumber');
}
public get email(){
  return this.form.get('email');
}
public get course(){
  return this.form.get('course');
}
public get cid(){
  return this.form.get('course')?.get('cid');
}

public get whatsappNumber(){
  return this.form.get('whatsappNumber');
}

public get semester(){
  return this.form.get('semester');
}
public get branch(){
  return this.form.get('branch');
}
public get college(){
  return this.form.get('college');
}
public get parentNumber(){
  return this.form.get('parentNumber');
}
public get address(){
  return this.form.get('address');
}
}
