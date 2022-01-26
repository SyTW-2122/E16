import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./auth.guard";

//components

import { MainComponent } from "./main/main.component";
import {SigninComponent} from "./signin/signin.component"
import {SignupComponent} from "./signup/signup.component"
import { HttpClientModule } from '@angular/common/http';

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
    path: "signin",
    component: SigninComponent
  },
  {
    path: "signup",
    component: SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
