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

<<<<<<< HEAD
  public getData():any{
    return JSON.parse(localStorage.getItem("registerData"));
  }
=======

>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4

  public clear(){
    localStorage.clear();
  }
  public postregister(data: any){
   return  this.httpClient.post(this.baseUrl+"/api/v1/registration-controller/ns/register",data)
                 
               
  }
}
