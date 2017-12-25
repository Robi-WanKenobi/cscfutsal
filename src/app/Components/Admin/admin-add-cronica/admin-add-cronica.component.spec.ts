import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCronicaComponent } from './admin-add-cronica.component';

describe('AdminAddCronicaComponent', () => {
  let component: AdminAddCronicaComponent;
  let fixture: ComponentFixture<AdminAddCronicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddCronicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
