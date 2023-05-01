import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BatchService } from 'src/app/services/batch.service';

export interface RegisteredCourse{
  id:number;
  name:string;
  description:string;
  duration:string;
  courseType:string;
  fees:number

}

export interface Batch{
  id:number;
  name:string;
  startDate:string;
  sessionDuration:string;
  noOfSeats:number;
  startTime:string;
   course:RegisteredCourse;
  // trainer:Object
  cid:number;
  tid:number;
  cname:string;
  tname:string;

  
  
}


@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent {
  form= new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    startdate: new FormControl('',[Validators.required,]),
    sessionDuration: new FormControl('',[Validators.required,]),
    noOfSeats: new FormControl('',[Validators.required,]),
    startTime: new FormControl('',[Validators.required,]),
    course:new FormGroup({
      id: new FormControl()
      
    }),
    trainer:new FormGroup({
      id: new FormControl()
    })
 })

 public get id(){
  return this.form.get('id');
 }
 public get name(){
  return this.form.get('name');
}
public get startdate(){
  return this.form.get('startdate');
}
public get sessionduration(){
  return this.form.get('sessionduration');
}
public get noOfSeats(){
  return this.form.get('noOfSeats');
}
public get startTime(){
  return this.form.get('startTime');
}
public get cid(){
  return this.form.get('course')?.get('cid');
}
public get tid(){
  return this.form.get('trainer')?.get('tid');
}
public get course(){
  return this.form.get('course');
}
public get trainer(){
  return this.form.get('trainer');
}
  batch : Batch[]=[]
  view:boolean=false;
  modifyview:boolean=false;

  bdetail:Batch={
    id: 0,
    name: '',
    startDate: '',
    sessionDuration: '',
    noOfSeats: 0,
    startTime: '',
    cid: 0,
    tid: 0,
    cname: '',
    tname: '',
    course: undefined
  }
  

  constructor(private batchservice:BatchService){
    this.batchservice.getdata((data:any)=>
    {
      this.batch=data;
    })
  }

  Onclick(data:any){
    this.batchservice.postdata((data:any)=>{
      console.log(data);
    })
    this.batchservice.getdata((data:any)=>
    {
      this.batch=data;
    })
    this.view=false;
    this.modifyview=false;
  }

  OnModify(data:any){
    this.batchservice.putdata((data:any)=>{
      console.log(data);
      this.batchservice.getdata((data:any)=>
      {
        this.batch=data;
      })
    })
    this.view=false;
    this.modifyview=false;
  }

  Ondelete(id:any){
    this.batchservice.deletedata(id,(data:any)=>{
      this.batchservice.getdata((data:any)=>
      {
        this.batch=data;
      })
    })
  }

  public addview()
  {
    this.view=true;
    this.modifyview=false;
  }
  public loaddata(c){
    this.bdetail=c;
    this.modifyview=true;
    this.view=false;

  }
}
