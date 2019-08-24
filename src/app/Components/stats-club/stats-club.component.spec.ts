import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsClubComponent } from './stats-club.component';

describe('StatsClubComponent', () => {
  let component: StatsClubComponent;
  let fixture: ComponentFixture<StatsClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
