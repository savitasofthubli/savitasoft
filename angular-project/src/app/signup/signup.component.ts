
import { Component } from '@angular/core';
import { SavitasoftService } from '../savitasoft.service';

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

    signup:Signup[]=[];

    constructor(private signservice:SavitasoftService){}

    public onsignup(data:any)
    {
      console.log(data);
      
      this.signservice.postDetails(data,(retval:any)=>{
        console.log(retval);
        alert("Created account successfully");
      })

    }
   
}
