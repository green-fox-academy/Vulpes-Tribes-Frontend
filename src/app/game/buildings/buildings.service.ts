import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class BuildingsService {

  return;
  building;

  constructor(private http: HttpClient) {
  }

  getBuildingsFromBackend(): Observable<any> {
    return this.http.get(environment.getBuildings, { observe: 'response' });
  }

  createBuilding(buildingType: string): Observable<any> {
    const buildingResponse = this.http.post<any>(environment.createBuilding, {
      type: buildingType,
    },                                           { observe: 'response' });
    buildingResponse.subscribe((response) => {
      if (response.status === 200) {
        const buildings = JSON.parse(localStorage.getItem('buildings'));
        buildings.push(response.body['newBuilding']);
        localStorage.setItem('buildings', JSON.stringify(buildings));
      }
    });
    return buildingResponse;
  }

  updateBuildings(): Observable<any> {
    const localBuildings = JSON.parse(localStorage.getItem('buildings'));
    return this.http.put(environment.getBuildings, localBuildings, { observe: 'response' });
  }
}
