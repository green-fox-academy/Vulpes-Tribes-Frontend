import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Building} from '../../_models/building.model';
import {BuildingFactory} from '../../_helpers/factories/building.factory';

@Injectable({
  providedIn: 'root',
})

export class BuildingsService {

  constructor(private http: HttpClient, private buildingFactory: BuildingFactory) {
  }

  // Loads initial set of buildings from the backend
  getBuildingsFromBackend(): Observable<any> {
    let buildings = this.http.get(environment.getBuildings, { observe: 'response' });
    buildings.subscribe((response) => {
      localStorage.setItem('buildings', JSON.stringify(response.body['buildings']));
    });
    return buildings;
  }

  // Gets buildings from local storage
  getBuildings(): Building[] {
    const buildingsArray = this.getBuildingsArray();
    localStorage.setItem('buildings', JSON.stringify(buildingsArray));
    return buildingsArray;
  }

  createBuilding(buildingType: string): Building {
    const buildings = this.getBuildingsArray();
    const newBuilding = new BuildingFactory().createBuilding(buildings.length, buildingType);
    buildings.push(newBuilding);
    localStorage.setItem('buildings', JSON.stringify(buildings));
    return newBuilding;
  }

  convertResponseToBuilding(objectArray: Building[]) {
    const buildingsArray: Building[] = [];
    objectArray.forEach((building) => {
      const newBuilding = new BuildingFactory().createBuilding(building.id, building.type);
      newBuilding.finishedAt = building.finishedAt;
      newBuilding.startedAt = building.startedAt;
      newBuilding.hp = building.hp;
      newBuilding.level = building.level;
      buildingsArray.push(newBuilding);
    });
    return buildingsArray;
  }

  getBuildingsArray(): Building[] {
    const objectArray: Building[] = JSON.parse(localStorage.getItem('buildings'));
    const buildings: Building[] = this.convertResponseToBuilding(objectArray);
    return buildings;
  }

  updateBuildings() {
    this.http.put(environment.getBuildings, this.getBuildings());
  }
}
