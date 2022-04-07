"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const signin_component_1 = require("./signin.component");
describe('SigninComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [signin_component_1.SigninComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(signin_component_1.SigninComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
