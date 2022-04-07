"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const zonacentro_component_1 = require("./zonacentro.component");
describe('ZonaCentroComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [zonacentro_component_1.ZonaCentroComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(zonacentro_component_1.ZonaCentroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
