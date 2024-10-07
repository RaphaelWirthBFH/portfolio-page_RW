import { TestBed } from '@angular/core/testing';

import { AareApiService } from './aare-api.service';

describe('AareApiService', () => {
  let service: AareApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AareApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
