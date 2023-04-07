import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OtpServiceService } from '../services/otp-service.service';

export interface Phone{
  phonenumber: number;
}

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.css']
})
export class PhonenumberComponent {
  form= new FormGroup({
    phonenumber: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),    });
 
  phoneno: Phone[]=[];

  constructor(private phoneservice: OtpServiceService){}

  public onSend(data:any)
  {
    console.log(data);
    if(this.form.valid)
    {
      this.form.reset();
    }
    this.phoneservice.postNumber(data,(retval:any)=>{
      console.log(retval);
    })
  }

 
  
}
