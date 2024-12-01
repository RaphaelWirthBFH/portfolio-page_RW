import { TestBed } from '@angular/core/testing';

import { CountryInfoApiService } from './country-info-api.service';

describe('CountryInfoApiService', () => {
  let service: CountryInfoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryInfoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
