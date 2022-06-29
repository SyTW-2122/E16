"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const auth_guard_1 = require("./auth.guard");
describe('AuthGuard', () => {
    let guard;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        guard = testing_1.TestBed.inject(auth_guard_1.AuthGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
