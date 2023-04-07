
import { Component } from '@angular/core';
import { SavitasoftService } from '../services/savitasoft.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface Signup{
  name:string;
  phonenumber:number;
  email:string;
  password:string;
  confirm:string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})




export class SignupComponent {

    form: FormGroup;

    signup:Signup[]=[];

    constructor(private signservice:SavitasoftService, 
                private router: Router, 
                fb: FormBuilder
      ){
        this.form= fb.group ({
          name: ['',Validators.required],
          phonenumber: ['',Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
          email: ['',Validators.required,Validators.email],
          password: ['',Validators.required,Validators.minLength(8), Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
          )],
          confirm: ['',Validators.required]
          
        },
        {
          validators: passwordValidators.passwordShouldMatch
        }
        );
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
      public get password(){
        return this.form.get('password');
      }
      public get confirmpassword(){
        return this.form.get('confirmpassword');
      }

    public onsignup(data:any)
    {
      console.log(data);
      
      this.signservice.postDetails(data,(retval:any)=>{
        console.log(retval);
        alert("Created account successfully");
        this.router.navigate(['joinnow']);
      })

    }
    
}


export class passwordValidators{
  static passwordShouldMatch(control: AbstractControl){
    let password=control.get('password');
    let confirm=control.get('confirm');

    if(password.value!== confirm.value)
    {
      return{passwordShouldMatch:true};
    }
    return null;

}
}