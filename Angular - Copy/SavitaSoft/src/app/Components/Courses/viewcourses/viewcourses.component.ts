import { Component } from '@angular/core';
import { Product } from '../../Objective/Common.objects';
// import { CourseService } from '../courses.service';

@Component({
  selector: 'app-viewcourses',
  templateUrl: './viewcourses.component.html',
  styleUrls: ['./viewcourses.component.css']
})
export class ViewcoursesComponent {

  products : Product[] =[
    {productId:1001,productName : 'C/C++',productPrice: 0,image:"../.../../../../../assets/img/courses-1.jpg"},
    {productId:1002,productName : 'Python',productPrice:60000,image:"../.../../../../../assets/img/courses-2.jpg"},
    {productId:1003,productName : 'Java',productPrice:70000,image:"../.../../../../../assets/img/courses-3.jpg"},
    {productId:1004,productName : 'FullStack',productPrice:80000,image:"../.../../../../../assets/img/courses-4.jpg"}
  ]

  public onBuy(evt : Product):void{
    console.log(evt)
  }
}
