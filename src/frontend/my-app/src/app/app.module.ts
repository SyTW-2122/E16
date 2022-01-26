import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthGuard } from "./auth.guard";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MainComponent } from './main/main.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    MainComponent,
    CreateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
