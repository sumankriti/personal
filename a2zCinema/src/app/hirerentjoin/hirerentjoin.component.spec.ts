import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HirerentjoinComponent } from './hirerentjoin.component';

describe('HirerentjoinComponent', () => {
  let component: HirerentjoinComponent;
  let fixture: ComponentFixture<HirerentjoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HirerentjoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HirerentjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
