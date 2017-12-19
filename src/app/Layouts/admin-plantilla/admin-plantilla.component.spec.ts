import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlantillaComponent } from './admin-plantilla.component';

describe('AdminPlantillaComponent', () => {
  let component: AdminPlantillaComponent;
  let fixture: ComponentFixture<AdminPlantillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlantillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
