import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventResultComponent } from './event-result.component';

describe('EventResultComponent', () => {
  let component: EventResultComponent;
  let fixture: ComponentFixture<EventResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
