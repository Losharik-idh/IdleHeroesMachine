import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyOrbsComponent } from './monthly-orbs.component';

describe('MonthlyOrbsComponent', () => {
  let component: MonthlyOrbsComponent;
  let fixture: ComponentFixture<MonthlyOrbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyOrbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyOrbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
