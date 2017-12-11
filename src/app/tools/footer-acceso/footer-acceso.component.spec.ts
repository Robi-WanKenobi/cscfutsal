import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAccesoComponent } from './footer-acceso.component';

describe('FooterAccesoComponent', () => {
  let component: FooterAccesoComponent;
  let fixture: ComponentFixture<FooterAccesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAccesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
