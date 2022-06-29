import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaSurComponent } from './zonasur.component';

describe('ZonaSurComponent', () => {
  let component: ZonaSurComponent;
  let fixture: ComponentFixture<ZonaSurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaSurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaSurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
