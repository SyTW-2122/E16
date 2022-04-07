import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarachicoComponent } from './garachico.component';

describe('GarachicoComponent', () => {
  let component: GarachicoComponent;
  let fixture: ComponentFixture<GarachicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarachicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarachicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
