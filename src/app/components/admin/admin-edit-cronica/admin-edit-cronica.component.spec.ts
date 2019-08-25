import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditCronicaComponent } from './admin-edit-cronica.component';

describe('AdminEditCronicaComponent', () => {
  let component: AdminEditCronicaComponent;
  let fixture: ComponentFixture<AdminEditCronicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditCronicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditCronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
