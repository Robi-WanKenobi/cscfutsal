import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEquipoComponent } from './admin-add-equipo.component';

describe('AdminAddEquipoComponent', () => {
  let component: AdminAddEquipoComponent;
  let fixture: ComponentFixture<AdminAddEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
