import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxAsisClubComponent } from './max-asis-club.component';

describe('MaxAsisClubComponent', () => {
  let component: MaxAsisClubComponent;
  let fixture: ComponentFixture<MaxAsisClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxAsisClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxAsisClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
