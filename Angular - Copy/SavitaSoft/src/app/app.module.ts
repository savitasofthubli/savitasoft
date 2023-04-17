import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CubeComponent } from './Components/cube/cube.component';
import { TitleComponent } from './Components/title/title.component';
import { MainComponent } from './Components/main/main/main.component';
import { AboutusComponent } from './Components/aboutus/aboutus/aboutus.component';
import { HomeComponent } from './Components/Home/home/home.component';
import {ViewcoursesComponent} from './Components/Courses/viewcourses/viewcourses.component'
import { HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './Components/Contact/contact/contact.component';
import { CourseComponent } from './Components/Courses//course/course.component';
import { ViewaboutusComponent } from './Components/aboutus/viewaboutus/viewaboutus/viewaboutus.component';
import { ViewcontactComponent } from './Components/Contact/viewcontact/viewcontact/viewcontact.component';
import { DemoComponent } from './Components/Demo/demo/demo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CaseConvertorDirective } from './Directive/caseconvertor.directive';
import { FinalcoursesComponent } from './Components/Courses/finalcourses/finalcourses.component';
import { AnimatecoursesComponent } from './Components/Courses/animatecourses/animatecourses.component';
import { AdminloginComponent } from './Components/Login/adminlogin/adminlogin.component';
import { RegisterComponent } from './Components/registration/register/register.component';
import { ViewregisterComponent } from './Components/registration/viewregister/viewregister.component';
import { AdminComponent } from './Components/title/admin/admin.component';
import { AdminhomeComponent } from './Components/Home/adminhome/adminhome.component';
import { AdminviewregistrationComponent } from './Components/registration/adminviewregistration/adminviewregistration.component'
import { NgSelectModule } from '@ng-select/ng-select';
import { PhoneNumberComponent } from './Components/phone-number/phone-number.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CubeComponent,
    TitleComponent,
    MainComponent,
    AboutusComponent,
    ViewcoursesComponent,
    HomeComponent,
    ContactComponent,
    CourseComponent,
    ViewaboutusComponent,
    ViewcontactComponent,
    DemoComponent,
    CaseConvertorDirective,
    FinalcoursesComponent,
    AnimatecoursesComponent,
    AdminloginComponent,
    RegisterComponent,
    ViewregisterComponent,
    AdminComponent,
    AdminhomeComponent,
    AdminviewregistrationComponent,
    PhoneNumberComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
