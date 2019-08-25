import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPartidosComponent } from './inicio-partidos.component';

describe('InicioPartidosComponent', () => {
  let component: InicioPartidosComponent;
  let fixture: ComponentFixture<InicioPartidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioPartidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
