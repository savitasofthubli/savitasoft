
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhoneVerifyService } from 'src/app/services/phone-verify.service';
import { RegisterService } from 'src/app/services/register.service';

export interface Otp{
  otp: string;
}

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent {
  form= new FormGroup({
    otp: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(6)])
 });

  constructor(private phoneVerify: PhoneVerifyService, private router: Router, private registerService:RegisterService){}

  public get otp(){
    return this.form.get('otp');
  }


  onClick(data: string)
  {
     let maindata:any = Object.assign(data,JSON.parse(this.phoneVerify.getNumber()));
     console.log(maindata);
     this.phoneVerify.postOtp(maindata,(retval:any)=>{
        console.log(retval);
        alert("Phone number verified successfully");
        this.phoneVerify.clear();
    });

    // this.phoneVerify.getData((data:any)=>{
    //    if(data!==null){  
    //       this.registerService.setData(data);
    //       this.router.navigate(['registerForm']);
    //    }else{
    //        this.router.navigate(['registerForm']);
    //    }
    // });

  }

  onClick2()
  {
    console.log(JSON.parse(this.phoneVerify.getNumber()));
    this.phoneVerify.postNumber(JSON.parse(this.phoneVerify.getNumber()),(retval:any)=>{
      console.log(retval);
      alert("Otp sent to your phone number successfully");
    });
  }
}
