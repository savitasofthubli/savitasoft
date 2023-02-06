import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';

const routes: Routes = [
   {path : '',component:HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'joinnow',component:JoinnowComponent},   
   {path:'course',component:CourseComponent},
   {path:'joinnow/signup',component:SignupComponent},
   {path:'contact',component:ContactusComponent},
   {path:'course/register',component:RegisterComponent},
   {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 