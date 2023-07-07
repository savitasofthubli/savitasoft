import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../commons/common_interfaces';
import { BaseUrl } from '../commons/serverurl';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private restApi : HttpClient) { }

  public login(user : User, callback : any){
    this.restApi.post(BaseUrl.registrationUrl+"/login",user)
              .subscribe((response)=>callback(response),
                         (error : any)=>callback(null));
  }
}
