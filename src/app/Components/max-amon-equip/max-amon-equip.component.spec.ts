import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxAmonEquipComponent } from './max-amon-equip.component';

describe('MaxAmonEquipComponent', () => {
  let component: MaxAmonEquipComponent;
  let fixture: ComponentFixture<MaxAmonEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxAmonEquipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxAmonEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
