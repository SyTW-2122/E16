import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Los_GigantesComponent } from './los_gigantes.component';

describe('Los_GigantesComponent', () => {
  let component: Los_GigantesComponent;
  let fixture: ComponentFixture<Los_GigantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Los_GigantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Los_GigantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
