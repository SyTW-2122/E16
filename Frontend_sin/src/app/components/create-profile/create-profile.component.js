"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfileComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let CreateProfileComponent = class CreateProfileComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    ngOnInit() {
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl(null),
            description: new forms_1.FormControl(null),
            image: new forms_1.FormControl(null),
        });
    }
    onFileSelect(event) {
        const file = event.target.files[0];
        this.form.patchValue({ image: file });
        const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
        if (file && allowedMimeTypes.includes(file.type)) {
            const reader = new FileReader();
            reader.onload = () => {
                this.imageData = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }
    onSubmit() {
        this.profileService.addProfile(this.form.value.name, this.form.value.description, this.form.value.image);
        this.form.reset();
        this.imageData = null;
    }
};
CreateProfileComponent = __decorate([
    (0, core_1.Component)({
        selector: "app-create-profile",
        templateUrl: "./create-profile.component.html",
        styleUrls: ["./create-profile.component.css"],
    })
], CreateProfileComponent);
exports.CreateProfileComponent = CreateProfileComponent;
