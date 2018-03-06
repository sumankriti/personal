import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdFundingComponent } from './crowd-funding.component';

describe('CrowdFundingComponent', () => {
  let component: CrowdFundingComponent;
  let fixture: ComponentFixture<CrowdFundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdFundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
