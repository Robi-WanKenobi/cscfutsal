import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinGolEquipComponent } from './min-gol-equip.component';

describe('MinGolEquipComponent', () => {
  let component: MinGolEquipComponent;
  let fixture: ComponentFixture<MinGolEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinGolEquipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinGolEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
