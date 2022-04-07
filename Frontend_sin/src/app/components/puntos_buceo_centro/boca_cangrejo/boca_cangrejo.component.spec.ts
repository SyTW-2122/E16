import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boca_CangrejoComponent } from './boca_cangrejo.component';

describe('Boca_CangrejoComponent', () => {
  let component: Boca_CangrejoComponent;
  let fixture: ComponentFixture<Boca_CangrejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Boca_CangrejoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Boca_CangrejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

