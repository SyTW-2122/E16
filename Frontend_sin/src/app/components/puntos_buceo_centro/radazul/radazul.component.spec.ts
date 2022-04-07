import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadazulComponent } from './radazul.component';

describe('RadazulComponent', () => {
  let component: RadazulComponent;
  let fixture: ComponentFixture<RadazulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadazulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadazulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
