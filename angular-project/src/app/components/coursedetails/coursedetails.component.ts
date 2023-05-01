import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoursedetailsService } from './../../services/coursedetails.service';
import { Component } from '@angular/core';
import { timer } from 'rxjs';

export interface Coursedetail{
  id:number;
  name:string;
  description:string;
  duration:string;
  courseType:string;
  fees:number

}

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})


export class CoursedetailsComponent {
  coursedetail : Coursedetail[]=[]
  view:boolean=false;
  modifyview:boolean=false;
  cdetail: Coursedetail= {
    id: 0,
    name: '',
    description: '',
    duration: '',
    courseType: '',
    fees: 0
  }
  form= new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    description: new FormControl('',[Validators.required]),
   duration: new FormControl('',[Validators.required]),
   courseType: new FormControl('',[Validators.required]),
  fees: new FormControl('',[Validators.required]),
 })


  constructor(private courseservice:CoursedetailsService){
    this.courseservice.getdata((data:any)=>
    {
      this.coursedetail=data;
    })
  }

  Onclick(data:any){
    this.courseservice.postdata((data:any)=>{
      console.log(data);
      this.courseservice.getdata((data:any)=>
      {
        this.coursedetail=data;
      })
    })
    this.view=false;
    this.modifyview=false;
  }

  OnModify(data:any){
    this.courseservice.putdata((data:any)=>{
      console.log(data);
      this.courseservice.getdata((data:any)=>
      {
        this.coursedetail=data;
      })
    })
    this.view=false;
    this.modifyview=false;
  }

  Ondelete(id:any){
    this.courseservice.deletedata(id,(data:any)=>{
      this.courseservice.getdata((data:any)=>
      {
        this.coursedetail=data;
      })
    })
  }

  public addview()
  {
    this.view=true;
    this.modifyview=false;
  }
  public get id(){
    return this.form.get('id');
   }
  public get name(){
    return this.form.get('name');
  }
  public get description(){
    return this.form.get('description');
  }
  public get duration(){
    return this.form.get('duration');
  }
  public get courseType(){
    return this.form.get('courseType');
  }
  public get fees(){
    return this.form.get('fees');
  }


  public loaddata(){
   // this.cdetail=c;
    this.modifyview=true;
    this.view=false;

  }
  
}
