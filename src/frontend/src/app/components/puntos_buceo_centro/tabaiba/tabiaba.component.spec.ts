import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabaibaComponent } from './tabaiba.component';

describe('TabaibaComponent', () => {
  let component: TabaibaComponent;
  let fixture: ComponentFixture<TabaibaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabaibaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabaibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
