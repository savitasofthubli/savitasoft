import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from '../commons/serverurl';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  
  
  constructor(private restApi : HttpClient) { }

  public getAllCourses(callback : any){
    this.restApi.get(BaseUrl.courseUrl)
                .subscribe((response : any)=>callback(response));
  }
}
