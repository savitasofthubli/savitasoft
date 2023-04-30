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
import { TrainerComponent } from './components/trainer/trainer.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { StudentComponent } from './components/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNoVerifyComponent,
    OtpVerifyComponent,
    RegisterFormComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    TrainerComponent,
    ReceiptComponent,
    StudentComponent
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
