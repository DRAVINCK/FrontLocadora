import { TestBed } from '@angular/core/testing';

import { CarrocaService } from './carroca.service';

describe('CarrocaService', () => {
  let service: CarrocaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrocaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
