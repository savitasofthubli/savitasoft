import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { SpinnerstartComponent } from './components/spinnerstart/spinnerstart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServicesectionComponent } from './components/servicesection/servicesection.component';
import { AboutsectionComponent } from './components/aboutsection/aboutsection.component';
import { CategoriessectionComponent } from './components/categoriessection/categoriessection.component';
import { CoursesectionComponent } from './components/coursesection/coursesection.component';
import { TeamsectionComponent } from './components/teamsection/teamsection.component';
import { TestimonialsectionComponent } from './components/testimonialsection/testimonialsection.component';
import { FootersectionComponent } from './components/footersection/footersection.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AboutHeaderComponent } from './components/aboutheader/aboutheader.component'
import { ContactComponent } from './components/contact/contact.component';
import { ContactsectionComponent } from './components/contactsection/contactsection.component';
import { ContactheaderComponent } from './components/contactheader/contactheader.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AddregistrationComponent } from './components/addregistration/addregistration.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import { CourseheaderComponent } from './components/courseheader/courseheader.component';
import { CourseComponent } from './components/course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    SpinnerstartComponent,
    NavbarComponent,
    CarouselComponent,
    ServicesectionComponent,
    AboutsectionComponent,
    CategoriessectionComponent,
    CoursesectionComponent,
    TeamsectionComponent,
    TestimonialsectionComponent,
    FootersectionComponent,
    AboutusComponent,
    AboutHeaderComponent,
    ContactComponent,
    ContactsectionComponent,
    ContactheaderComponent,
    AddregistrationComponent,
    RegistrationComponent,
    CourseheaderComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
