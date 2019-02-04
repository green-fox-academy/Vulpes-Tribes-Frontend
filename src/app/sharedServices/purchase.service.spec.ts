import { TestBed } from '@angular/core/testing';

import { PurchaseService } from './purchase.service';
import { ResourcesService } from '../game/resources/resources.service';
import { TESTINGIMPORTS } from '../../environments/testing.imports';

describe('PurchaseService', () => {

  let purchaseService: PurchaseService;
  let resourcesServiceSpy: jasmine.SpyObj<ResourcesService>;
  let resourcesService: ResourcesService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ResourcesService', ['getResources']);
    TestBed.configureTestingModule({
      declarations: TESTINGIMPORTS.declarations,
      imports: TESTINGIMPORTS.imports,
      providers: [PurchaseService,
        { provide: ResourcesService, useValue: spy }],
    });

    purchaseService = TestBed.get(PurchaseService);
    resourcesServiceSpy = TestBed.get(ResourcesService);
  });

  it('should be created', () => {
    const service: PurchaseService = TestBed.get(PurchaseService);
    expect(service).toBeTruthy();
  });
});
