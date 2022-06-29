"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const token_interceptor_service_1 = require("./token-interceptor.service");
describe('TokenInterceptorService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(token_interceptor_service_1.TokenInterceptorService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
