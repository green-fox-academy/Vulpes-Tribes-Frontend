import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../../../environments/endpoints';
import { Building } from '../../_models/building.model';

@Injectable({
  providedIn: 'root',
})

export class BuildingsService {

  building;

  constructor(private http: HttpClient) {}

  getBuildingsFromBackend(): Observable<any> {
    return this.http
      .get(ENDPOINTS.getBuildings, { observe: 'response' });
  }

  createBuilding(buildingType: string): Observable<Building> {
    return this.http
      .post<any>(ENDPOINTS.getBuildings, { type: buildingType });
  }

  filterBuildings(status: string) {
    let buildings = [];
    this.http
      .get(ENDPOINTS.getBuildings, { observe: 'response' })
      .subscribe((response) => {
        const buildingsInResponse = response.body['response'];
        if (status === 'finished') {
          buildings = (buildingsInResponse.filter(building => building.finishedAt <= Date.now()));
        } else if (status === 'unfinished') {
          buildings = buildingsInResponse.filter(building => building.finishedAt > Date.now());
        }
      });
    return buildings;
  }

  showAllBuildings() : Observable<Building[]> {
    return new Observable<Building[]>((observer) => {
      if (localStorage.getItem('buildings')) {
        observer.next(JSON.parse(localStorage.getItem('buildings')));
        observer.complete();
      } else {
        this.getBuildingsFromBackend().subscribe(response => {
          observer.next(response.response);
          observer.complete();
        });
      }
    });
  }

  updateLocalStorage(building: Building) {
    const buildings: Building[] = JSON.parse(localStorage.getItem('buildings'));
    buildings.push(building);
    localStorage.setItem('buildings', JSON.stringify(buildings));
  }
}
