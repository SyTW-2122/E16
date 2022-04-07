import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Risco_GarachicoComponent } from './risco_garachico.component';

describe('Risco_GarachicoComponent', () => {
  let component: Risco_GarachicoComponent;
  let fixture: ComponentFixture<Risco_GarachicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Risco_GarachicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Risco_GarachicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

