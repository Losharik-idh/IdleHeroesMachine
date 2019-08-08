import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRowComponent } from './monthly-row.component';

describe('MonthlyRowComponent', () => {
  let component: MonthlyRowComponent;
  let fixture: ComponentFixture<MonthlyRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
