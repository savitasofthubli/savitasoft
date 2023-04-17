import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  baseUrl: string ="http://localhost:8080";


  constructor(private httpClient: HttpClient) { }

  public setData(data:any){
    localStorage.setItem("registerData",JSON.stringify(data));
  }



  public clear(){
    localStorage.clear();
  }
  public postregister(data: any){
   return  this.httpClient.post(this.baseUrl+"/api/v1/registration-controller/ns/register",data)
                 
               
  }
}
