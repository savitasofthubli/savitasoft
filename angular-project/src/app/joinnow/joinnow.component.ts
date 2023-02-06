import { SavitasoftService } from './../savitasoft.service';
import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';

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

  constructor(private ssService : SavitasoftService){
    this.ssService.getDetails((data: any)=>{
      this.joincourse = data;
    })
  };

  public onSave(data : any){

    console.log(data);
    if(this.form.valid)
    {
      this.form.reset();
    }
     this.ssService.postDetails(data,(retval : any)=>{
      console.log("value stored");
      console.log(retval);
    })
  }    
}