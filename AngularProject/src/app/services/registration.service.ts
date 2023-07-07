import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseRegistration, Registration } from '../commons/common_interfaces';
import { BaseUrl } from '../commons/serverurl';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  
  constructor(private restApi : HttpClient) { }

  public checkRegistractionExist(data : string, callback :any ){
    this.restApi.get(BaseUrl.baseUrl+"/checkregistration/"+data)
                .subscribe((dt)=> {
                                    callback(dt);
                                  });
  }

  public addRegistration(data : Registration,callback : any){
    this.restApi.post(BaseUrl.baseUrl+"/api/v1/registration-controller/addregister",data)
                .subscribe((response : any)=>callback(response));
  } 


  public addCourseRegistration(data : CourseRegistration,callback :any){
    this.restApi.post(BaseUrl.baseUrl2,data)
                .subscribe((response : any)=>callback(response));
    
  }

  public checkRegistrationByPhone(phone : string,callback :any){
    this.restApi.get(BaseUrl.baseUrl+"/api/v1/registration-controller/checkregistration/"+phone)
                .subscribe((response : any)=>callback(response));
    
  }

  public getRegistrationByPhone(phone : string,callback :any){
    this.restApi.get(BaseUrl.baseUrl+"/api/v1/registration-controller/registration/"+phone)
                .subscribe((response : any)=>callback(response));
    
  }

  public getRegistrationByEmail(email : string,callback :any){
    this.restApi.get(BaseUrl.baseUrl+"/api/v1/registration-controller/registration/"+email)
                .subscribe((response : any)=>callback(response));
    
  }

  public getRegistrationByWhatsapp(whatsapp : string,callback :any){
    this.restApi.get(BaseUrl.baseUrl+"/api/v1/registration-controller/registration/"+whatsapp)
                .subscribe((response : any)=>callback(response));
    
  }

}
