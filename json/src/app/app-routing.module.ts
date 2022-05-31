import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SubjectComponent } from './subject/subject.component';
import { TimingComponent } from './timing/timing.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent },
  {path: '', component: HomeComponent},
  {path: 'subject', component:SubjectComponent},
  {path: 'timing', component:TimingComponent}
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
