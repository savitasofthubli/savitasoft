import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Objective/Common.objects';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

<<<<<<< HEAD
=======
  baseUrl: string ="http://localhost:8080";

>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4
  baseCoursesUrl : string = "http://localhost:3000/registration";
  baseStudentUrl: string =" http://localhost:3000/registration";

  constructor(private httpClient : HttpClient) { }

  public getAllCourses(callback : any){
    let ob = this.httpClient.get(this.baseCoursesUrl);
    ob.subscribe((data)=>{
      callback (data);
    })
  }

<<<<<<< HEAD
=======
  public getcourses(callback : any){
    this.httpClient.get(this.baseUrl+"/api/v1/course-controller/ns/courses").subscribe((data :any)=>{
             callback(data);
    });
   }
>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4

  
  public saveStudent (student : Student) : void{
    let ob = this.httpClient.post(this.baseStudentUrl,student);
    ob.subscribe(data=>{
      console.log(data);
    });

  }


}
