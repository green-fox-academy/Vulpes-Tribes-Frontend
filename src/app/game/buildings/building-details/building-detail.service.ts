import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Building } from '../../../_models/building.model';
import { ENDPOINTS } from '../../../../environments/endpoints';
import { BuildingsService } from '../buildings.service';

@Injectable({
  providedIn: 'root',
})
export class BuildingDetailService {

  constructor(private http: HttpClient) { }

  levelUpBuilding(building: Building) {
    let buildings: Building[];
    const buildingToUpdate = building;
    buildings = JSON.parse(localStorage.getItem('buildings'));
    buildings.find(building => building.id === buildingToUpdate.id).level += 1;
    localStorage.setItem('buildings', JSON.stringify(buildings));
    return this.http
      .put(`${ENDPOINTS.getBuildings}/${building.id}`, { id: building.id, level: building.level });
  }
}
