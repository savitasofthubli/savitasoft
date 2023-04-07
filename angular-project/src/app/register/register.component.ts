import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SavitasoftService } from '../services/savitasoft.service';

export interface Register{
  name:string;
  phonenumber:number;
  email:string;
  cid:number;
  cname:string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   form= new FormGroup({
      name: new FormControl('',Validators.required),
      phonenumber: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('',[Validators.required,Validators.email]),
      course:new FormGroup({
        cid: new FormControl()
      })
   });


  register:Register[]=[];

  constructor(private registerservice:SavitasoftService){
       registerservice.getDetails((data:any)=>{
        this.register=data;
       })
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




  public onregister(data:any)
  {
    console.log(data);
    if(this.form.valid)
    {
      this.form.reset();
    }
    this.registerservice.postDetails(data,(retval:any)=>{
      console.log(retval);
      alert("Registered Successfully");
    })

  }
}
