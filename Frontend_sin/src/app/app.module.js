"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
const forms_2 = require("@angular/forms");
const http_1 = require("@angular/common/http");
const auth_guard_1 = require("./auth.guard");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const signin_component_1 = require("./components/signin/signin.component");
const signup_component_1 = require("./components/signup/signup.component");
const navbar_component_1 = require("./components/navbar/navbar.component");
const token_interceptor_service_1 = require("../app/services/token-interceptor.service");
const main_component_1 = require("./components/main/main.component");
const apuntes_component_1 = require("./components/apuntes/apuntes.component");
const profile_component_1 = require("./components/profile/profile.component");
const create_profile_component_1 = require("./components/create-profile/create-profile.component");
const footer_component_1 = require("./components/footer/footer.component");
const zonasur_component_1 = require("./components/zonasur/zonasur.component");
const zonanorte_component_1 = require("./components/zonanorte/zonanorte.component");
const zonacentro_component_1 = require("./components/zonacentro/zonacentro.component");
const abades_component_1 = require("./components/puntos_buceo_sur/abades/abades.component");
const las_eras_component_1 = require("./components/puntos_buceo_sur/las_eras/las_eras.component");
const boca_cangrejo_component_1 = require("./components/puntos_buceo_centro/boca_cangrejo/boca_cangrejo.component");
const los_gigantes_component_1 = require("./components/puntos_buceo_sur/los_gigantes/los_gigantes.component");
const radazul_component_1 = require("./components/puntos_buceo_centro/radazul/radazul.component");
const tabaiba_component_1 = require("./components/puntos_buceo_centro/tabaiba/tabaiba.component");
const garachico_component_1 = require("./components/puntos_buceo_norte/garachico/garachico.component");
const risco_garachico_component_1 = require("./components/puntos_buceo_norte/risco_garachico/risco_garachico.component");
const sauzal_component_1 = require("./components/puntos_buceo_norte/sauzal/sauzal.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            signin_component_1.SigninComponent,
            signup_component_1.SignupComponent,
            navbar_component_1.NavbarComponent,
            main_component_1.MainComponent,
            apuntes_component_1.ApuntesComponent,
            profile_component_1.ProfileComponent,
            create_profile_component_1.CreateProfileComponent,
            footer_component_1.FooterComponent,
            zonasur_component_1.ZonaSurComponent,
            zonanorte_component_1.ZonaNorteComponent,
            zonacentro_component_1.ZonaCentroComponent,
            abades_component_1.AbadesComponent,
            las_eras_component_1.Las_ErasComponent,
            los_gigantes_component_1.Los_GigantesComponent,
            sauzal_component_1.SauzalComponent,
            risco_garachico_component_1.Risco_GarachicoComponent,
            garachico_component_1.GarachicoComponent,
            tabaiba_component_1.TabaibaComponent,
            boca_cangrejo_component_1.Boca_CangrejoComponent,
            radazul_component_1.RadazulComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_2.FormsModule,
            http_1.HttpClientModule,
            forms_1.ReactiveFormsModule,
        ],
        providers: [auth_guard_1.AuthGuard,
            {
                provide: http_1.HTTP_INTERCEPTORS,
                useClass: token_interceptor_service_1.TokenInterceptorService,
                multi: true
            }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
