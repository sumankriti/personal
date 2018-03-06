import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrousaleffectComponent } from './crousaleffect.component';

describe('CrousaleffectComponent', () => {
  let component: CrousaleffectComponent;
  let fixture: ComponentFixture<CrousaleffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrousaleffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrousaleffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
