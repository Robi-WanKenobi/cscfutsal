import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxGolsEquipComponent } from './max-gols-equip.component';

describe('MaxGolsEquipComponent', () => {
  let component: MaxGolsEquipComponent;
  let fixture: ComponentFixture<MaxGolsEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxGolsEquipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxGolsEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
