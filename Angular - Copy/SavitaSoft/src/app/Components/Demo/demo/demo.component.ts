import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  flag :boolean=false;

  public OnClick()
 {
   this.flag=!this.flag
 }

  num1 :number=0
  num2 :number=0
  largestof2 : number=0


 public onLargest()
{
  if(this.num1>this.num2)
   this.largestof2=this.num1;
   else
   this.largestof2=this.num2;
}

  num01 :number=0
  num02 :number=0
  num03 :number=0
  largestof3 : number=0

public data1(num : string){
  this.num01 = parseInt(num);
}

public data2(num : string){
 this.num02 = parseInt(num);
}

public data3(num : string){
 this.num03 = parseInt(num);
}

weeks: number = 0

public checkData(val:string)
  {
    let week : number=parseInt(val)
    if(week===1)
    this.weeks=1
    else if(week===2)
    this.weeks=2
    else if(week===3)
    this.weeks=3
    else if(week===4)
    this.weeks=4
    else if(week===5)
    this.weeks=5
    else if(week===6)
    this.weeks=6
    else if(week===7)
    this.weeks=7
  }


  selectedCars = [3];
    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab', disabled: true },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];

    ngOnInit() {

    }

    toggleDisabled() {
        const car: any = this.cars[1];
        car.disabled = !car.disabled;
    }
}
