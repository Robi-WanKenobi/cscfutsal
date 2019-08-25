import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipacionesComponent } from './equipaciones.component';

describe('EquipacionesComponent', () => {
  let component: EquipacionesComponent;
  let fixture: ComponentFixture<EquipacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
