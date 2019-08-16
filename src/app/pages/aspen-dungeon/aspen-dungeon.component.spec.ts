import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspenDungeonComponent } from './aspen-dungeon.component';

describe('AspenDungeonComponent', () => {
  let component: AspenDungeonComponent;
  let fixture: ComponentFixture<AspenDungeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspenDungeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspenDungeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
