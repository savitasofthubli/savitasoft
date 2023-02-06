import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavitasoftService {
  baseURL : string="http://localhost:8080";

  constructor(private http:HttpClient) {}
  
  public getDetails(callback : any){
    this.http.get(this.baseURL+"/course")
    .subscribe((data : any)=>{
     callback(data);
    })
  }

  public postDetails(data:any,callback:any){
    this.http.post(this.baseURL+"/savitasoft",data)
         .subscribe((data : any)=>{
          callback(data);
         })
  }
}
