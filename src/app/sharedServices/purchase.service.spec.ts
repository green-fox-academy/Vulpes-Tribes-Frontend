import { TestBed } from '@angular/core/testing';

import { PurchaseService } from './purchase.service';
import { ResourcesService } from '../game/resources/resources.service';

fdescribe('PurchaseService', () => {

  let resourcesService: ResourcesService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ResourcesService],
  }));

  fit('should be created', () => {
    const service: PurchaseService = TestBed.get(PurchaseService);
    expect(service).toBeTruthy();
  });

  fit('should use resources service', () => {
    resourcesService = TestBed.get(ResourcesService);
    expect(resourcesService.getResources()).toHaveBeenCalled();
  });
});
