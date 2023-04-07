import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { UserAuthService } from './services/user-auth.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Project';
  
  constructor(private userAuthService:UserAuthService, private router: Router, public userService:UserService) {
    
  }

  onActivate(event:any) {
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 } 

 public isLoggedIn(){
  return this.userAuthService.isLoggedIn();
 }

 public logout(){
  this.userAuthService.clear();
  this.router.navigate(['/home']);
 }
 
 public onSend(){
  return this.onSend();
 }

}