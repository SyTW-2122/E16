import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Las_ErasComponent } from './las_eras.component';

describe('Las_ErasComponent', () => {
  let component: Las_ErasComponent;
  let fixture: ComponentFixture<Las_ErasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Las_ErasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Las_ErasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

