import { Component} from '@angular/core';
import { OtpServiceService } from '../services/otp-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export interface Otp{
  otp: number;
  
}

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  form= new FormGroup({
    otp: new FormControl('',[Validators.required])
    });
 
  otp: Otp[]=[];
  
  constructor(private otpservice: OtpServiceService){}


  public onSend(data:any)
  {
    console.log(data);
    if(this.form.valid)
    {
      this.form.reset();
    }
    this.otpservice.postOtp(data,(retval:any)=>{
      console.log(retval);
    })
      return true;
  }

}

