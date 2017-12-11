import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSortidaComponent } from './footer-sortida.component';

describe('FooterSortidaComponent', () => {
  let component: FooterSortidaComponent;
  let fixture: ComponentFixture<FooterSortidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSortidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSortidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
