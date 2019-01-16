import { TestBed } from '@angular/core/testing';

import { TroopsService } from './troops.service';

describe('TroopsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TroopsService = TestBed.get(TroopsService);
    expect(service).toBeTruthy();
  });
});
