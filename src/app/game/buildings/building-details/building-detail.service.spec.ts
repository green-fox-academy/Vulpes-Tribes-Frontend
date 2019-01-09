import { TestBed } from '@angular/core/testing';

import { BuildingDetailService } from './building-detail.service';

describe('BuildingDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildingDetailService = TestBed.get(BuildingDetailService);
    expect(service).toBeTruthy();
  });
});
