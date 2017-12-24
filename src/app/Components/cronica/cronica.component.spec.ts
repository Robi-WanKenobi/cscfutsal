import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronicaComponent } from './cronica.component';

describe('CronicaComponent', () => {
  let component: CronicaComponent;
  let fixture: ComponentFixture<CronicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
