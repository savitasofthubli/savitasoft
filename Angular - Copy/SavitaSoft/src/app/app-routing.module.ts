import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { ViewaboutusComponent } from './Components/aboutus/viewaboutus/viewaboutus/viewaboutus.component';
import { ViewcontactComponent } from './Components/Contact/viewcontact/viewcontact/viewcontact.component';
import { FinalcoursesComponent } from './Components/Courses/finalcourses/finalcourses.component';
import { RegisterComponent } from './Components/registration/register/register.component';
import { ViewregisterComponent } from './Components/registration/viewregister/viewregister.component';
import { AdminhomeComponent } from './Components/Home/adminhome/adminhome.component';
import { AdminviewregistrationComponent } from './Components/registration/adminviewregistration/adminviewregistration.component';
import { PhoneNumberComponent } from './Components/phone-number/phone-number.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"Aboutus",component:ViewaboutusComponent},
  {path:"Courses",component:FinalcoursesComponent},
  {path:"Contact",component:ViewcontactComponent},
  {path:"Register",component:RegisterComponent},
  {path:"AdminviewRegistration",component:AdminviewregistrationComponent},
  {path:"AdminHome",component:AdminhomeComponent},
  {path:" ",component:HomeComponent},
  {path:"PhoneNumber",component:PhoneNumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
