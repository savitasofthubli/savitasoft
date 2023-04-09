import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneVerifyService {

  baseUrl: string ="http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public postNumber(data: any, callback:any){
    this.httpClient.post(this.baseUrl+"/otp-controller/send",data)
                   .subscribe((data)=>{
                    callback(data);
                  });
  }

  public setNumber(phoneNo:string){
    localStorage.setItem('phoneNo',JSON.stringify(phoneNo));
  }

  public getNumber():string{
    return localStorage.getItem('phoneNo');
  }

  public clear(){
    localStorage.clear();
  }

  public postOtp(data: any,callback:any){
    this.httpClient.post(this.baseUrl+"/otp-controller/validate",data)
    .subscribe((data:any)=>{
      callback(data);
     });
  }

  public getData(callback: any){
    this.httpClient.get(this.baseUrl+"/otp-controller/validate")
                   .subscribe((data:any)=>{
                    callback(data);
                   })
  }
}
