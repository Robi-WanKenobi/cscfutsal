import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddJugadorComponent } from './admin-add-jugador.component';

describe('AdminAddJugadorComponent', () => {
  let component: AdminAddJugadorComponent;
  let fixture: ComponentFixture<AdminAddJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
