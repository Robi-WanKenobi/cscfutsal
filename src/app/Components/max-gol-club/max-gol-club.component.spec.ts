import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxGolClubComponent } from './max-gol-club.component';

describe('MaxGolClubComponent', () => {
  let component: MaxGolClubComponent;
  let fixture: ComponentFixture<MaxGolClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxGolClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxGolClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
