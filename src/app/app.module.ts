import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthGuard } from "./auth.guard";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { TokenInterceptorService } from "../app/services/token-interceptor.service";
import { MainComponent } from './components/main/main.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { ZonaSurComponent } from './components/zonasur/zonasur.component';
import { ZonaNorteComponent } from './components/zonanorte/zonanorte.component';
import { ZonaCentroComponent } from './components/zonacentro/zonacentro.component';
import { AbadesComponent } from './components/puntos_buceo_sur/abades/abades.component';
import { Las_ErasComponent } from './components/puntos_buceo_sur/las_eras/las_eras.component';
import { Boca_CangrejoComponent } from './components/puntos_buceo_centro/boca_cangrejo/boca_cangrejo.component';
import { Los_GigantesComponent } from './components/puntos_buceo_sur/los_gigantes/los_gigantes.component';
import { RadazulComponent } from './components/puntos_buceo_centro/radazul/radazul.component';
import { TabaibaComponent } from './components/puntos_buceo_centro/tabaiba/tabaiba.component';
import { GarachicoComponent } from './components/puntos_buceo_norte/garachico/garachico.component';
import { Risco_GarachicoComponent } from './components/puntos_buceo_norte/risco_garachico/risco_garachico.component';
import { SauzalComponent } from './components/puntos_buceo_norte/sauzal/sauzal.component';
import {ChatComponent} from './components/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    MainComponent,
    InformacionComponent,
    ProfileComponent,
    ChatComponent,
    CreateProfileComponent,
    FooterComponent,
    ZonaSurComponent,
    ZonaNorteComponent,
    ZonaCentroComponent,
    AbadesComponent,
    Las_ErasComponent,
    Los_GigantesComponent,
    SauzalComponent,
    Risco_GarachicoComponent,
    GarachicoComponent,
    TabaibaComponent,
    Boca_CangrejoComponent,
    RadazulComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
