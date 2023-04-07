import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpServiceService {

  baseURL: string="http://localhost:8080";

  constructor(private http:HttpClient) {}

  public postOtp(data:any,callback:any){
    this.http.post(this.baseURL+"",data)
         .subscribe((data : any)=>{
          callback(data);
         })
  }

  public postNumber(data:any,callback:any){
    this.http.post(this.baseURL+"",data)
         .subscribe((data : any)=>{
          callback(data);
         })
  }

}
