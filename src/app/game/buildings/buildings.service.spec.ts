import { TestBed } from '@angular/core/testing';

import { BuildingsService } from './buildings.service';
import {BuildingsComponent} from './buildings.component';
import {BuildingComponent} from './building/building.component';
import {BuildingDetailComponent} from './building-details/building-detail.component';
import {ModalService} from './building-details/modal.service';
import {DomService} from './building-details/domService';

describe('BuildingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [BuildingsComponent, BuildingComponent, BuildingDetailComponent],
    imports: [ ModalService, DomService],
    providers: [ModalService, DomService]
  }));

  it('should be created', () => {
    const service: BuildingsService = TestBed.get(BuildingsService);
    expect(service).toBeTruthy();
  });
});
