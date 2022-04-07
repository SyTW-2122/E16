"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const auth_guard_1 = require("./auth.guard");
//components
const main_component_1 = require("./components/main/main.component");
const signin_component_1 = require("./components/signin/signin.component");
const signup_component_1 = require("./components/signup/signup.component");
const http_1 = require("@angular/common/http");
const apuntes_component_1 = require("./components/apuntes/apuntes.component");
const profile_component_1 = require("./components/profile/profile.component");
const zonasur_component_1 = require("./components/zonasur/zonasur.component");
const zonanorte_component_1 = require("./components/zonanorte/zonanorte.component");
const zonacentro_component_1 = require("./components/zonacentro/zonacentro.component");
const abades_component_1 = require("./components/puntos_buceo_sur/abades/abades.component");
const las_eras_component_1 = require("./components/puntos_buceo_sur/las_eras/las_eras.component");
const los_gigantes_component_1 = require("./components/puntos_buceo_sur/los_gigantes/los_gigantes.component");
const sauzal_component_1 = require("./components/puntos_buceo_norte/sauzal/sauzal.component");
const garachico_component_1 = require("./components/puntos_buceo_norte/garachico/garachico.component");
const risco_garachico_component_1 = require("./components/puntos_buceo_norte/risco_garachico/risco_garachico.component");
const boca_cangrejo_component_1 = require("./components/puntos_buceo_centro/boca_cangrejo/boca_cangrejo.component");
const radazul_component_1 = require("./components/puntos_buceo_centro/radazul/radazul.component");
const tabaiba_component_1 = require("./components/puntos_buceo_centro/tabaiba/tabaiba.component");
const routes = [
    {
        path: "",
        redirectTo: "/main",
        pathMatch: "full"
    },
    {
        path: "main",
        component: main_component_1.MainComponent
    },
    {
        path: "apuntes",
        component: apuntes_component_1.ApuntesComponent, canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: "signin",
        component: signin_component_1.SigninComponent
    },
    {
        path: "signup",
        component: signup_component_1.SignupComponent
    },
    {
        path: "zonasur",
        component: zonasur_component_1.ZonaSurComponent
    },
    {
        path: "abades",
        component: abades_component_1.AbadesComponent
    },
    {
        path: "las_eras",
        component: las_eras_component_1.Las_ErasComponent
    },
    {
        path: "los_gigantes",
        component: los_gigantes_component_1.Los_GigantesComponent
    },
    {
        path: "zonacentro",
        component: zonacentro_component_1.ZonaCentroComponent
    },
    {
        path: "tabaiba",
        component: tabaiba_component_1.TabaibaComponent
    },
    {
        path: "radazul",
        component: radazul_component_1.RadazulComponent
    },
    {
        path: "boca_cangrejo",
        component: boca_cangrejo_component_1.Boca_CangrejoComponent
    },
    {
        path: "zonanorte",
        component: zonanorte_component_1.ZonaNorteComponent
    },
    {
        path: "sauzal",
        component: sauzal_component_1.SauzalComponent
    },
    {
        path: "garachico",
        component: garachico_component_1.GarachicoComponent
    },
    {
        path: "risco_garachico",
        component: risco_garachico_component_1.Risco_GarachicoComponent
    },
    {
        path: "perfil",
        component: profile_component_1.ProfileComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes), http_1.HttpClientModule],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
