import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsEquipoComponent } from './stats-equipo.component';

describe('StatsEquipoComponent', () => {
  let component: StatsEquipoComponent;
  let fixture: ComponentFixture<StatsEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
