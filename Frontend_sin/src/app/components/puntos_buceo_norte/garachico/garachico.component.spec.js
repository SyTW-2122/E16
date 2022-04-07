"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const garachico_component_1 = require("./garachico.component");
describe('GarachicoComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [garachico_component_1.GarachicoComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(garachico_component_1.GarachicoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
