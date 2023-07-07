import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddregistrationComponent } from './components/addregistration/addregistration.component';
import { CourseComponent } from './components/course/course.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutusComponent},
  {path:"contact",component:ContactComponent},
  {path:"registration", component: AddregistrationComponent},
  {path:"course", component: CourseComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
