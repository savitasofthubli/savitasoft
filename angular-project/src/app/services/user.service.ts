import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  path: string = "http://localhost:8080";

  requestHeader= new HttpHeaders(
    {"No-Auth": "True"}
  );

  constructor(private http: HttpClient,private userAuthService:UserAuthService) { }

  public onSave(data:any){
    return this.http.post(this.path + "/api/v1/auth/authenticate",data,{ headers: this.requestHeader});
  }


  public roleMatch(allowedRoles):any{

    let isMatch=false;
     const roles: any = this.userAuthService.getRoles();
     if(roles!=null && roles)
     {
      for(let i=0;i<roles.length;i++)
      {
        for( let j=0;j<allowedRoles.length;j++)
        {
          if(roles[i].roleName===allowedRoles[j]){
            isMatch=true;
            return isMatch;
          }
          else
          return isMatch;
        }
      }
     }
  }
}