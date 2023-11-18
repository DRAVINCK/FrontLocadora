import { TestBed } from '@angular/core/testing';

import { AviaoService } from './aviao.service';

describe('AviaoService', () => {
  let service: AviaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AviaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
