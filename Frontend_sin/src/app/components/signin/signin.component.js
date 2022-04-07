"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigninComponent = void 0;
const core_1 = require("@angular/core");
let SigninComponent = class SigninComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {
            email: "",
            password: ""
        };
    }
    ngOnInit() {
    }
    signIn() {
        this.authService.signIn(this.user)
            .subscribe(res => {
            console.log(res);
            localStorage.setItem("token", res.token);
            this.router.navigate(["/apuntes"]);
        }, err => console.log(err));
    }
};
SigninComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.css']
    })
], SigninComponent);
exports.SigninComponent = SigninComponent;
