import { Component } from '@angular/core';

export interface Trainer{
  id:number;
  receiptNumber: string;
  receiptDate: Date;
  amountPaid: string;
}

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {
  addView:boolean=false;
  modifyView:boolean=false;
  tdetails: Trainer={
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    alternatePhoneNumber: '',
    id: 0
  }

  trainer: Trainer[]=[];

  constructor(private trainerService: TrainerServiceService){
    this.trainerService.getTrainerDetails((data:any)=>{
      this.trainer=data;
    })
  }

  public onAdd(data:any){
    console.log(data);
    this.trainerService.postTrainerDetails(data,(retval:any)=>{
      console.log(retval);
      this.trainerService.getTrainerDetails((data:any)=>{
        this.trainer=data;
        this.addView=false;
      })
    })
  }

  public onModify(data:any){
    console.log(data);
    this.trainerService.putTrainerDetails(data,(retval:any)=>{
      console.log(retval);
      this.trainerService.getTrainerDetails((data:any)=>{
        this.trainer=data;
        this.modifyView=false;
      })
    })
  }

  public onAddView(){
    this.addView=true;
    this.modifyView=false;
  }

  public onModifyLoad(data){
    this.tdetails=data;
    this.addView=false;
    this.modifyView=true;
  }

  public onDelete(id:any){
     this.trainerService.deleteTrainerDetails(id,(data:any)=>{
      this.trainerService.getTrainerDetails((data)=>{
        this.trainer=data;
      })
     })
  }
}
