import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./auth.guard";

//components

import { MainComponent } from "./components/main/main.component";
import {SigninComponent} from "./components/signin/signin.component"
import {SignupComponent} from "./components/signup/signup.component"
import { HttpClientModule } from '@angular/common/http';
import { ApuntesComponent } from './components/apuntes/apuntes.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "/main",
    pathMatch: "full" 
  },
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "apuntes",
    component: ApuntesComponent, canActivate: [AuthGuard]
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "perfil",
    component: ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
