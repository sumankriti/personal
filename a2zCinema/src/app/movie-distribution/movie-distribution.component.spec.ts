import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDistributionComponent } from './movie-distribution.component';

describe('MovieDistributionComponent', () => {
  let component: MovieDistributionComponent;
  let fixture: ComponentFixture<MovieDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
