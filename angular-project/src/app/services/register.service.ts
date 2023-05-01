import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl: string ="http://localhost:8080";


  constructor(private httpClient: HttpClient) { }

  public setData(data:any){
    localStorage.setItem("registerData",JSON.stringify(data));
  }

  public getData():any{
    return JSON.parse(localStorage.getItem("registerData"));
  }

  public clear(){
    localStorage.clear();
  }
  public postregister(data: any){
   return  this.httpClient.put(this.baseUrl+"/api/v1/registration-controller/ns/register",data)


  }

}
