import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinGolClubComponent } from './min-gol-club.component';

describe('MinGolClubComponent', () => {
  let component: MinGolClubComponent;
  let fixture: ComponentFixture<MinGolClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinGolClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinGolClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
