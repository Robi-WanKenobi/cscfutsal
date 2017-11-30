import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxAmonClubComponent } from './max-amon-club.component';

describe('MaxAmonClubComponent', () => {
  let component: MaxAmonClubComponent;
  let fixture: ComponentFixture<MaxAmonClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxAmonClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxAmonClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
