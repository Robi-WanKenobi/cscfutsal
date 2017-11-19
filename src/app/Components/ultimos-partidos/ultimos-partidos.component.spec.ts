import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosPartidosComponent } from './ultimos-partidos.component';

describe('UltimosPartidosComponent', () => {
  let component: UltimosPartidosComponent;
  let fixture: ComponentFixture<UltimosPartidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimosPartidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimosPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
