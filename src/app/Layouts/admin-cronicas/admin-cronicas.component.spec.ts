import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCronicasComponent } from './admin-cronicas.component';

describe('AdminCronicasComponent', () => {
  let component: AdminCronicasComponent;
  let fixture: ComponentFixture<AdminCronicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCronicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCronicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
