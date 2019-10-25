import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthCompComponent } from './month-comp.component';

describe('MonthCompComponent', () => {
  let component: MonthCompComponent;
  let fixture: ComponentFixture<MonthCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
