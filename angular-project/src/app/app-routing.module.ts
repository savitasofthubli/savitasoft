import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PhoneNoVerifyComponent } from './components/registration/phone-no-verify/phone-no-verify.component';
import { AboutComponent } from './components/about/about.component';
import { OtpVerifyComponent } from './components/registration/otp-verify/otp-verify.component';
import { RegisterFormComponent } from './components/registration/register-form/register-form.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { BatchdetailsComponent } from './components/batchdetails/batchdetails.component';
import { AdmissionComponent } from './components/admission/admission.component';

const routes: Routes = [
  { path:"home", component:HomeComponent },
  { path:"about", component:AboutComponent },
  { path:"courses", component:CoursesComponent },
  { path:"phoneNumberVerify", component:PhoneNoVerifyComponent },
  { path:"phoneNumberVerify/otpVerify", component:OtpVerifyComponent },
  { path:"phoneNumberVerify/otpVerify/registerForm", component:RegisterFormComponent },
  { path:"courses/phoneNumberVerify", component:PhoneNoVerifyComponent},
  { path:"courses/phoneNumberVerify/otpVerify", component:OtpVerifyComponent },
  { path:"coursedetails", component:CoursedetailsComponent },
  { path:"batchdetails", component:BatchdetailsComponent},
  { path:"admission", component:AdmissionComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
