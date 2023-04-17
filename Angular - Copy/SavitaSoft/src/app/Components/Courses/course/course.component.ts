import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Objective/Common.objects';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() product : Product = {productId:0,productName:'',productPrice:0,image:''};
  @Output() buy = new EventEmitter();
  public onBuyClick():void{
    this.buy.emit(this.product);
  }
}
