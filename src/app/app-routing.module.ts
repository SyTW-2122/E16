import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./auth.guard";

//components

import { MainComponent } from "./components/main/main.component";
import {SigninComponent} from "./components/signin/signin.component"
import {SignupComponent} from "./components/signup/signup.component"
import { HttpClientModule } from '@angular/common/http';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ZonaSurComponent } from './components/zonasur/zonasur.component';
import { ZonaNorteComponent } from './components/zonanorte/zonanorte.component';
import { ZonaCentroComponent } from './components/zonacentro/zonacentro.component';
import { AbadesComponent } from './components/puntos_buceo_sur/abades/abades.component';
import { Las_ErasComponent } from './components/puntos_buceo_sur/las_eras/las_eras.component';
import { Los_GigantesComponent } from './components/puntos_buceo_sur/los_gigantes/los_gigantes.component';
import { SauzalComponent } from './components/puntos_buceo_norte/sauzal/sauzal.component';
import { GarachicoComponent } from './components/puntos_buceo_norte/garachico/garachico.component';
import { Risco_GarachicoComponent } from './components/puntos_buceo_norte/risco_garachico/risco_garachico.component'
import { Boca_CangrejoComponent } from './components/puntos_buceo_centro/boca_cangrejo/boca_cangrejo.component';
import { RadazulComponent } from './components/puntos_buceo_centro/radazul/radazul.component';
import { TabaibaComponent } from './components/puntos_buceo_centro/tabaiba/tabaiba.component';
import {ChatComponent} from './components/chat/chat.component'

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
    path: "informacion",
    component: InformacionComponent, canActivate: [AuthGuard]
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
    path: "chat",
    component: ChatComponent, canActivate: [AuthGuard]
  },

  {
    path: "zonasur",
    component: ZonaSurComponent
  },

  {
    path: "abades",
    component: AbadesComponent
  },

  {
    path: "las_eras",
    component: Las_ErasComponent
  },

  {
    path: "los_gigantes",
    component: Los_GigantesComponent
  },

  {
    path: "zonacentro",
    component: ZonaCentroComponent
  },

  {
    path: "tabaiba",
    component: TabaibaComponent
  },

  {
    path: "radazul",
    component: RadazulComponent
  },

  {
    path: "boca_cangrejo",
    component: Boca_CangrejoComponent
  },

  {
    path: "zonanorte",
    component: ZonaNorteComponent
  },

  {
    path: "sauzal",
    component: SauzalComponent
  },

  {
    path: "garachico",
    component: GarachicoComponent
  },

  {
    path: "risco_garachico",
    component: Risco_GarachicoComponent
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
