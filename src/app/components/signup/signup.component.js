"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupComponent = void 0;
const core_1 = require("@angular/core");
let SignupComponent = class SignupComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {
            nickname: "",
            email: "",
            password: "",
        };
    }
    ngOnInit() {
    }
    signUp() {
        this.authService.signUp(this.user)
            .subscribe(res => {
            console.log(res);
            localStorage.setItem("token", res.token);
            this.router.navigate(["/main"]);
        }, err => console.log(err));
    }
};
SignupComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.css']
    })
], SignupComponent);
exports.SignupComponent = SignupComponent;
