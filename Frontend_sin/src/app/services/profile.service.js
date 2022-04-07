"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
        this.profiles = [];
        this.profiles$ = new rxjs_1.Subject();
        this.url = "http://localhost:3000/api/profiles";
    }
    getProfiles() {
        this.http
            .get(this.url)
            .pipe((0, operators_1.map)((profileData) => {
            return profileData.profiles;
        }))
            .subscribe((profiles) => {
            this.profiles = profiles;
            this.profiles$.next(this.profiles);
        });
    }
    getProfilesStream() {
        return this.profiles$.asObservable();
    }
    addProfile(name, description, image) {
        const profileData = new FormData();
        profileData.append("name", name);
        profileData.append("description", description);
        profileData.append("image", image, name);
        this.http
            .post(this.url, profileData)
            .subscribe((profileData) => {
            const profile = {
                _id: profileData.profile._id,
                name: name,
                description: description,
                docPath: profileData.profile.docPath,
            };
            this.profiles.push(profile);
            this.profiles$.next(this.profiles);
        });
    }
};
ProfileService = __decorate([
    (0, core_1.Injectable)({
        providedIn: "root",
    })
], ProfileService);
exports.ProfileService = ProfileService;
