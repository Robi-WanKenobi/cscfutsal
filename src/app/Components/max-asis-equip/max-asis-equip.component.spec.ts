import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxAsisEquipComponent } from './max-asis-equip.component';

describe('MaxAsisEquipComponent', () => {
  let component: MaxAsisEquipComponent;
  let fixture: ComponentFixture<MaxAsisEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxAsisEquipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxAsisEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
