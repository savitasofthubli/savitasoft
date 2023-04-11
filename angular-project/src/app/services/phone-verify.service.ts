import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PhoneVerifyService {

  baseUrl: string ="http://localhost:8080/api/v1";
  
  phoneNo:string;

  constructor(private httpClient: HttpClient, private router: Router) { }

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
    this.phoneNo= JSON.parse(localStorage.getItem('phoneNo'));
    return this.phoneNo;
  }

  public clear(){
    localStorage.clear();
  }

  public postOtp(data: any){
    return this.httpClient.post(this.baseUrl+"/otp-controller/validate",data);
  }

  public getData(callback: any){
    this.httpClient.get(this.baseUrl+"/registration-controller/ns/registration/${this.phoneNo}")
                   .subscribe((data:any)=>{
                    callback(data);
                   })
  }
}
