import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoursedetailsService {

  baseUrl: string ="http://localhost:8080";

  constructor(private httpClient: HttpClient) { }


  public postdata(data:any){
  return this.httpClient.post(this.baseUrl+"",data)
  }

  public putdata(data:any){
    return this.httpClient.put(this.baseUrl+""+data.id,data)
    }

  public getdata(callback : any){
   this.httpClient.get(this.baseUrl+"").subscribe((data :any)=>{
            callback(data);
   });
  }


  public deletedata(id:number,callback : any){
    this.httpClient.delete(this.baseUrl+""+id).subscribe((data :any)=>{
             callback(data);
    });
   }

}
