

import { Injectable } from '@angular/core';
import { JwtModule } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(role:[]){
    localStorage.setItem("role",JSON.stringify(role));
  }

  public getRoles(): []{
    return JSON.parse(localStorage.getItem('role'));
  }
  
  public setToken(token:string){
    localStorage.setItem("token",token);
  }

  public getToken(): string{
    return localStorage.getItem("token");
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
      return this.getRoles() && this.getToken();
  }

}
