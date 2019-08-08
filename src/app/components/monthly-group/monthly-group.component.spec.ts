import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyGroupComponent } from './monthly-group.component';

describe('MonthlyGroupComponent', () => {
  let component: MonthlyGroupComponent;
  let fixture: ComponentFixture<MonthlyGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
