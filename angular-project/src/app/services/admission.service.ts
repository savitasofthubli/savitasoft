import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  baseUrl: string ="http://localhost:8080";

  constructor(private httpClient: HttpClient, private router: Router) { }
  public postdata(data:any){
    return this.httpClient.post(this.baseUrl+"",data)
    }
  
    public getdata(callback : any){
      this.httpClient.get(this.baseUrl+"").subscribe((data :any)=>{
               callback(data);
      });
     }

     public putdata(data:any){
      return this.httpClient.put(this.baseUrl+""+data.id,data)
      }
      public deletedata(id:number,callback : any){
        this.httpClient.delete(this.baseUrl+""+id).subscribe((data :any)=>{
                 callback(data);
        });
       }
}
