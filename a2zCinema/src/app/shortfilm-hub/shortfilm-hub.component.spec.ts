import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortfilmHubComponent } from './shortfilm-hub.component';

describe('ShortfilmHubComponent', () => {
  let component: ShortfilmHubComponent;
  let fixture: ComponentFixture<ShortfilmHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortfilmHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortfilmHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
