import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: 'home', 
    component: HomeComponent },
  { path: 'about', 
    component: AboutComponent },
  { path: 'user',
    component: UserComponent ,canActivate:[AuthService]},
  { path: 'contact',
    component: ContactComponent,canLoad:[AuthService]},
  { path: '',redirectTo: '/home', pathMatch:'full' },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
