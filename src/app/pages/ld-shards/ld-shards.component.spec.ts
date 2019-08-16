import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdShardsComponent } from './ld-shards.component';

describe('LdShardsComponent', () => {
  let component: LdShardsComponent;
  let fixture: ComponentFixture<LdShardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdShardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdShardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
