import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdmissionService } from 'src/app/services/admission.service';


export interface Admission{
  id:number;
  date:string;
  feesPaid:number;
  sid:number;
  bid:number;
  sname:string
  bname:string;
}

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent {

  view:boolean=false;
  modifyview:boolean=false;

 admission:Admission[]=[];
 adetail:Admission={
   id: 0,
   date: '',
   feesPaid: 0,
   sid: 0,
   bid: 0,
   sname: '',
   bname: ''
  }

  form= new FormGroup({
    description: new FormControl('',[Validators.required]),
   date: new FormControl('',[Validators.required]),
   feesPaid: new FormControl('',[Validators.required]),
  fees: new FormControl('',[Validators.required]),
  batch:new FormGroup({
    bid:new FormControl(),
    bname:new FormControl()
  }),
  student:new FormGroup({
    registration:new FormGroup({
      sname: new FormControl('',Validators.required),
      id:new FormControl()
    })
  })
 })

 public get id(){
  return this.form.get('id');
 }
 public get date(){
  return this.form.get('date');
 }
 public get feesPaid(){
  return this.form.get('feesPaid');
 }
 public get batch(){
  return this.form.get('batch');
 }
 public get bid(){
  return this.form.get('batch')?.get('bid');
}
public get registration(){
  return this.form.get('student').get('registration')
}
public get sid(){
  return this.form.get('student').get('registration').get('id')
}
public get tid(){
  return this.form.get('trainer')?.get('tid');
}
  constructor(private admissionservice:AdmissionService){
    this.admissionservice.getdata((data:any)=>
    {
      this.admission=data;
    })
  }

  Onclick(data:any){
    this.admissionservice.postdata((data:any)=>{
      console.log(data);
    })
  }

  OnModify(data:any){
    this.admissionservice.putdata((data:any)=>{
      console.log(data);
      this.admissionservice.getdata((data:any)=>
      {
        this.admission=data;
      })
    })
    this.view=false;
    this.modifyview=false;
  }

  Ondelete(id:any){
    this.admissionservice.deletedata(id,(data:any)=>{
      this.admissionservice.getdata((data:any)=>
      {
        this.admission=data;
      })
    })
  }

  public addview()
  {
    this.view=true;
    this.modifyview=false;
  }

  public loaddata(c){
    this.adetail=c;
    this.modifyview=true;
    this.view=false;

  }
  
}
