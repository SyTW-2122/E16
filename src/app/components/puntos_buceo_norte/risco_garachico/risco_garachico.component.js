"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Risco_GarachicoComponent = void 0;
const core_1 = require("@angular/core");
let Risco_GarachicoComponent = class Risco_GarachicoComponent {
    constructor() { }
    ngOnInit() {
    }
};
Risco_GarachicoComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-abades',
        templateUrl: './risco_garachico.component.html',
        styleUrls: ['./risco_garachico.component.css']
    })
], Risco_GarachicoComponent);
exports.Risco_GarachicoComponent = Risco_GarachicoComponent;
