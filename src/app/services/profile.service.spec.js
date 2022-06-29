"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const profile_service_1 = require("./profile.service");
describe('ProfileService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(profile_service_1.ProfileService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
