import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  baseUrl: string ="http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public postNumber(data: any, callback:any){
    this.httpClient.post(this.baseUrl+"/api/v1/otp/otp-controller/send",data)
                   .subscribe((data)=>{
                    callback(data);
                  });
  }

  public setNumber(phoneNo:string){
    localStorage.setItem('phoneNo',JSON.stringify(phoneNo));
  }

  public getNumber():string | null{
    return localStorage.getItem('phoneNo');
  }

  public clear(){
    localStorage.clear();
  }

  public postOtp(data: any){
    return this.httpClient.post(this.baseUrl+"/api/v1/otp/otp-controller/validate",data);
  }
}
