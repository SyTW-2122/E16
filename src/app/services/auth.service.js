"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const core_1 = require("@angular/core");
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.URL = "https://backend-tenerifebriefing.herokuapp.com";
    }
    signUp(user) {
        return this.http.post(this.URL + "/registro", user);
    }
    signIn(user) {
        return this.http.post(this.URL + "/login", user);
    }
    loggedIn() {
        if (localStorage.getItem("token")) {
            return true;
        }
        return false;
    }
    getToken() {
        return localStorage.getItem("token");
    }
    logOut() {
        localStorage.removeItem("token");
        this.router.navigate(["/registro"]);
    }
};
AuthService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], AuthService);
exports.AuthService = AuthService;
