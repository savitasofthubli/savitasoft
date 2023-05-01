import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private httpClient:HttpClient) { }
  baseUrl: string ="http://localhost:8080";

  public getcourses(callback : any){
    this.httpClient.get(this.baseUrl+"/api/v1/course-controller/ns/courses").subscribe((data :any)=>{
             callback(data);
    });
   }
}
