import { TestBed, inject } from '@angular/core/testing';

import { CronicaService } from './cronica.service';

describe('CronicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CronicaService]
    });
  });

  it('should be created', inject([CronicaService], (service: CronicaService) => {
    expect(service).toBeTruthy();
  }));
});
