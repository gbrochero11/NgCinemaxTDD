import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekBillboardComponent } from './week-billboard.component';

describe('WeekBillboardComponent', () => {
  let component: WeekBillboardComponent;
  let fixture: ComponentFixture<WeekBillboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekBillboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekBillboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
