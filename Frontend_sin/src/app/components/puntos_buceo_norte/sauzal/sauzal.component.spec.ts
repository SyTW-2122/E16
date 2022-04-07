import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SauzalComponent } from './sauzal.component';

describe('SauzalComponent', () => {
  let component: SauzalComponent;
  let fixture: ComponentFixture<SauzalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SauzalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SauzalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
