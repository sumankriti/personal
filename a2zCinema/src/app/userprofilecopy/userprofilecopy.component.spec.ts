import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilecopyComponent } from './userprofilecopy.component';

describe('UserprofilecopyComponent', () => {
  let component: UserprofilecopyComponent;
  let fixture: ComponentFixture<UserprofilecopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofilecopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilecopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
