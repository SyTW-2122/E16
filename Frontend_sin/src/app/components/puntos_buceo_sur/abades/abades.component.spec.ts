import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbadesComponent } from './abades.component';

describe('AbadesComponent', () => {
  let component: AbadesComponent;
  let fixture: ComponentFixture<AbadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
