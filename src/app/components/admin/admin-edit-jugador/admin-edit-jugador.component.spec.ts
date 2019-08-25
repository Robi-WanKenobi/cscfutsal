import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditJugadorComponent } from './admin-edit-jugador.component';

describe('AdminEditJugadorComponent', () => {
  let component: AdminEditJugadorComponent;
  let fixture: ComponentFixture<AdminEditJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
