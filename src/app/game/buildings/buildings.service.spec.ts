import { TestBed } from '@angular/core/testing';

import { BuildingsService } from './buildings.service';

describe('BuildingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildingsService = TestBed.get(BuildingsService);
    expect(service).toBeTruthy();
  });
});
