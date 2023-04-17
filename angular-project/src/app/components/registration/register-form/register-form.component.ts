import { Component, Input } from '@angular/core';
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
    name:  new FormControl<any>(null,Validators.required),
    phoneNumber: new FormControl<any>(null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    whatsappNumber: new FormControl(<any>null,Validators.required),
    college: new FormControl<any>(null,Validators.required),
    branch: new FormControl<any>(null,Validators.required),
    semester: new FormControl<any>(null,Validators.required),
    address: new FormControl<any>(null,Validators.required),
    parentNumber:new FormControl<any>(null,Validators.required),
    email: new FormControl<any>(null,[Validators.required,Validators.email]),
    course:new FormGroup({
      cid: new FormControl()
    })

 }
 )

 registerform:RegisterForm;

constructor( private registerService:RegisterService){}

 getdata():any
{
  return this.registerService.getData();

}


postdata(data:any){
    this.registerService.postregister(data).subscribe((response)=>{
      console.log(response);
      alert("data sent successfully");
      })

}
 public get name(){
  return this.form.get('name');
}
public get phoneNumber(){
  return this.form.get('phoneNumber');
}
public get email(){
  return this.form.get('email');
}
public get course(){
  return this.form.get('course');
}
public get cid(){
  return this.form.get('cid');
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

 // if(this.registerService.getData()){
  //   this.registerService.postregister(this.registerService.getData(),(retval:any)=>{
  //   console.log(retval);
  //   alert("data sent successfully");
  //   })
  // }else{
}
