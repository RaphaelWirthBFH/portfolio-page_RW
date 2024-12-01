import { TestBed } from '@angular/core/testing';

import { DadJokeApiService } from './dad-joke-api.service';

describe('DadJokeApiService', () => {
  let service: DadJokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadJokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
