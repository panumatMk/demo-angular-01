import { TestBed } from '@angular/core/testing';

import { PriceCompareService } from './price-compare.service';

describe('PriceCompareService', () => {
  let service: PriceCompareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceCompareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
