import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerServiceService {

  baseUrl: string= "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  public getTrainerDetails(callback:any){
    this.httpClient.get(this.baseUrl+"/trainer-controller/trainer")
                   .subscribe((data:any)=>{
                      callback(data);
                   })
  }

  public postTrainerDetails(data:any,callback:any){
    this.httpClient.post(this.baseUrl+"/trainer-controller/",data)
                   .subscribe((data:any)=>{
                      callback(data);
                   })
  }

  public putTrainerDetails(data:any,callback:any){
    this.httpClient.put(this.baseUrl+"/trainer-controller/",data)
                   .subscribe((data:any)=>{
                      callback(data);
                   })
  }

  public deleteTrainerDetails(id:any,callback:any){
    this.httpClient.delete(this.baseUrl+"/trainer-controller/"+{id})
                   .subscribe((data:any)=>{
                      callback(data);
                   })
  }

}
