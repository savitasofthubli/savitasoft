import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneVerifyService } from 'src/app/services/phone-verify.service';

export interface phoneNoVerify{
   phonenumber:string;
}

@Component({
  selector: 'app-phone-no-verify',
  templateUrl: './phone-no-verify.component.html',
  styleUrls: ['./phone-no-verify.component.css']
})
export class PhoneNoVerifyComponent {

  form= new FormGroup({
    phonenumber: new FormControl('',[Validators.required, Validators.pattern("^[0-9]{10}$")])
 });

  constructor(private phoneVerify: PhoneVerifyService, private router: Router){}



  onClick(data: string)
  {
    this.phoneVerify.setNumber(data);
    console.log(data);
    this.phoneVerify.postNumber(data,(retval:any)=>{
      console.log(retval);
      alert("Otp sent to your phone number successfully");
    });
  }
}
