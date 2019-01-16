import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Building } from '../../../_models/building.model';
import { environment } from '../../../../environments/environment';
import {BuildingFactory} from '../../../_helpers/factories/building.factory';

@Injectable({
  providedIn: 'root',
})
export class BuildingDetailService {

  constructor(private http: HttpClient) { }

  levelUpBuilding(building: Building) {
    let buildings: Building[];
    buildings = JSON.parse(localStorage.getItem('buildings')).buildings;
    console.log('========');
    console.log(buildings);
    console.log('========');
    const buildingToUpdateIndex = buildings.findIndex(building => building.id === building.id);
    buildings[buildingToUpdateIndex].level += 1;
    localStorage.setItem('buildings', JSON.stringify(buildings));
    console.log(localStorage.getItem('buildings'));
    return this.http
      .put(`${environment.getBuildings}/${building.id}`,
      {
        id: building.id,
        level: building.level,
      }, 200);
  }
}
