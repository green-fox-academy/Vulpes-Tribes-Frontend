import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Building} from '../../../_models/building.model';
import {environment} from '../../../../environments/environment';
import {BuildingsService} from '../buildings.service';

@Injectable({
  providedIn: 'root',
})
export class BuildingDetailService {

  constructor(private http: HttpClient, private buildingsService: BuildingsService) {
  }

  levelUpBuilding(building: Building) {
    const response = this.http.put(`${environment.getBuildings}/${building.id}`,
        {
          id: building.id,
          level: building.level,
        });
    const buildings: Building[] = this.buildingsService.getBuildings();
    const buildingToUpdate = building;
    buildingToUpdate.level += 1;
    const index = buildings.findIndex(building => building.id === buildingToUpdate.id);
    buildings[index] = buildingToUpdate;
    localStorage.setItem('buildings', JSON.stringify(buildings));
    console.log(localStorage.getItem('buildings'));
    return buildingToUpdate;
  }
}
