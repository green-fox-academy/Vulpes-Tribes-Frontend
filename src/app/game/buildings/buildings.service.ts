import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../../../environments/endpoints';
import { Building } from '../../_models/building.model';

@Injectable({
  providedIn: 'root',
})

export class BuildingsService {

  building;

  constructor(private http: HttpClient) {
  }

  getBuildingsFromBackend(): Observable<any> {
    return this.http
      .get(ENDPOINTS.getBuildings, { observe: 'response' });
  }

  createBuilding(buildingType: string): Observable<any> {
    return this.http
      .post<any>(ENDPOINTS.createBuilding,
                 { type: buildingType });
  }

  showFinishedBuildings() {
    return this.http
      .get(ENDPOINTS.getBuildings,
           { params: new HttpParams().set('status', 'finished'), observe: 'response' });
  }

  showUnfinishedBuildings() {
    return this.http
      .get(ENDPOINTS.getBuildings,
           { params: new HttpParams().set('status', 'unfinished'), observe: 'response' });
  }

  showAllBuildings(): Building[] {
    let buildings: Building[] = [];
    if (localStorage.getItem('buildings') !== null) {
      buildings = JSON.parse(localStorage.getItem('buildings'));
    } else {
      this.getBuildingsFromBackend().subscribe((response) => {
        buildings = response.body.response;
        localStorage.setItem('buildings', JSON.stringify(buildings));
      });
    }
    return buildings;
  }

  updateLocalStorage(building: Building) {
    const buildings: Building[] = JSON.parse(localStorage.getItem('buildings'));
    buildings.push(building);
    localStorage.setItem('buildings', JSON.stringify(buildings));
  }
}
