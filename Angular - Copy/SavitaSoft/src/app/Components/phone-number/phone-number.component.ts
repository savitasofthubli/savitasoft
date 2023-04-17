import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhoneServiceService } from 'src/app/Services/phone-service.service';

export interface phoneNoVerify{
  phonenumber:string;
}

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})



export class PhoneNumberComponent {
 
  form= new FormGroup({
    phonenumber: new FormControl('',[Validators.required, Validators.pattern("^[0-9]{10}$")])
 });

  constructor(private phoneVerify: PhoneServiceService, private router: Router){}

  

  onClick(data: string)
  {
    this.phoneVerify.setNumber(data);
    console.log(data);
    this.phoneVerify.postNumber(data,(retval:any)=>{
      console.log(retval);
      alert("Otp sent to your phone number successfully");
      this.router.navigate(['/Register'])
    });
  }
}
