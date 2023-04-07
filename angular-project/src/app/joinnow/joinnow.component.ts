import { UserAuthService } from './../services/user-auth.service';
import { UserService } from './../services/user.service';
import { SavitasoftService } from '../services/savitasoft.service';
import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export interface Joincourse{
  name:string,
  phonenumber:number
}


@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  });

  

  joincourse: Joincourse[]=[];

  constructor(private userService:UserService,
              public userAuthService:UserAuthService,
              private router: Router
  ){}

    onSave(data:any){
    
    this.userService.onSave(data).subscribe(
      (response:any)=>{
        this.userAuthService.setRoles(response.role);
        this.userAuthService.setToken(response.token);

        const role = response.role[0];

        if(role === 'ADMIN'){
           this.router.navigate(['home']);
        }else if(role === 'USER'){
           this.router.navigate(['home']);
        }
        console.log(response.token);
      },
      (error)=>{
        console.log(error);
        alert(error);
      }
    );

    console.log(data);
    if(this.form.valid)
    {
      this.form.reset();
    }
    
  } 

 public onForgot(){
    return true;
  }

}