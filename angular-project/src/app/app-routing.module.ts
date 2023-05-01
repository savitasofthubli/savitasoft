import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PhoneNoVerifyComponent } from './components/registration/phone-no-verify/phone-no-verify.component';
import { AboutComponent } from './components/about/about.component';
import { OtpVerifyComponent } from './components/registration/otp-verify/otp-verify.component';
import { RegisterFormComponent } from './components/registration/register-form/register-form.component';
<<<<<<< HEAD
import { TrainerComponent } from './components/trainer/trainer.component';
import { StudentComponent } from './components/student/student.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
=======
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { BatchdetailsComponent } from './components/batchdetails/batchdetails.component';
import { AdmissionComponent } from './components/admission/admission.component';
>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4

const routes: Routes = [
  { path:"home", component:HomeComponent },
  { path:"about", component:AboutComponent },
  { path:"courses", component:CoursesComponent },
  { path:"phoneNumberVerify", component:PhoneNoVerifyComponent },
  { path:"phoneNumberVerify/otpVerify", component:OtpVerifyComponent },
  { path:"phoneNumberVerify/otpVerify/registerForm", component:RegisterFormComponent },
<<<<<<< HEAD
  { path:"courses/phoneNumberVerify", component:PhoneNoVerifyComponent },
  { path:"courses/phoneNumberVerify/otpVerify", component:OtpVerifyComponent },
  { path:"trainer", component:TrainerComponent },
  { path:"student", component:StudentComponent },
  { path:"receipt", component:ReceiptComponent }
=======
  { path:"courses/phoneNumberVerify", component:PhoneNoVerifyComponent},
  { path:"courses/phoneNumberVerify/otpVerify", component:OtpVerifyComponent },
  { path:"coursedetails", component:CoursedetailsComponent },
  { path:"batchdetails", component:BatchdetailsComponent},
  { path:"admission", component:AdmissionComponent },



>>>>>>> d04195455fd910390d31f8858e8538fbc52c55d4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
