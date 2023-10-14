import { TestBed } from '@angular/core/testing';

import { EnergyServiceService } from './energy-service.service';

describe('EnergyServiceService', () => {
  let service: EnergyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
