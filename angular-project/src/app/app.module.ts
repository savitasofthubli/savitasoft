import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneNoVerifyComponent } from './components/registration/phone-no-verify/phone-no-verify.component';
import { OtpVerifyComponent } from './components/registration/otp-verify/otp-verify.component';
import { RegisterFormComponent } from './components/registration/register-form/register-form.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BatchdetailsComponent } from './components/batchdetails/batchdetails.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { AdmissionComponent } from './components/admission/admission.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNoVerifyComponent,
    OtpVerifyComponent,
    RegisterFormComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    BatchdetailsComponent,
    CoursedetailsComponent,
    AdmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
