import { Component } from '@angular/core';
import { CourseService } from '../../Courses/courses.service';

@Component({
  selector: 'app-viewregister',
  templateUrl: './viewregister.component.html',
  styleUrls: ['./viewregister.component.css']
})
export class ViewregisterComponent {

  public course : any;
  constructor(private service : CourseService){

  }

  public onRefresh(){
    let depts = this.service.getAllCourses((data : any)=>{
      console.log(depts);
      this.course = data;
    })
  }
}
