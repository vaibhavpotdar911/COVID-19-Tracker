import { TestBed } from '@angular/core/testing';

import { WorldwideCovidService } from './worldwide-covid.service';

describe('WorldwideCovidService', () => {
  let service: WorldwideCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldwideCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
