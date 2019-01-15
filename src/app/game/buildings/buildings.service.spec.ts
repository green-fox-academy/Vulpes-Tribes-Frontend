import { TestBed } from '@angular/core/testing';
import { BuildingsService } from './buildings.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Building } from '../../_models/building.model';

describe('BuildingsService', () => {
  let service: BuildingsService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        BuildingsService,
      ],
    });
  });

  beforeEach(() => {
    service = TestBed.get(BuildingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of buildings from the database', () => {
    let buildings: Building[];
    service.getBuildings().subscribe((response) => {
      buildings.push(response.body);
      expect(buildings[0]).toEqual(
        {
          id: 123,
          type: 'townhall',
          level: 1,
          hp: 100,
          startedAt: 1231232312,
          finishedAt: 7652146122,
        });
    });
  });

  it('Should create a new building', () => {
    let building: Building;

    service.createBuilding('mine').subscribe(response => {
      building = response;
      expect(building.type).not.toBe(null);
    });

  });

});
