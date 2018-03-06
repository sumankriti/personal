import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireRentJoinComponent } from './hire-rent-join.component';

describe('HireRentJoinComponent', () => {
  let component: HireRentJoinComponent;
  let fixture: ComponentFixture<HireRentJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireRentJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireRentJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
