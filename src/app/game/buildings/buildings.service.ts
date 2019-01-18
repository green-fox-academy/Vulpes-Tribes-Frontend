import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Building} from '../../_models/building.model';

@Injectable({
  providedIn: 'root',
})

export class BuildingsService {

  return;
  building;

  constructor(private http: HttpClient) {
  }

  getBuildings(): Observable<any> {
    const buildings = this.http.get(environment.getBuildings, { observe: 'response' });
    buildings.subscribe((response) => {
      localStorage.setItem('buildings', JSON.stringify(response.body['buildings']));

    });
    return buildings;
  }

  createBuilding(buildingType: string): Observable<any> {
    const buildingReponse = this.http.post<any>(environment.createBuilding, {
      type: buildingType,
    },                                          { observe: 'response' });
    buildingReponse.subscribe((response) => {
      if (response.status === 200) {
        const buildings = JSON.parse(localStorage.getItem('buildings'));
        buildings.push(response.body['newBuilding']);
        localStorage.setItem('buildings', JSON.stringify(buildings));
      }
    });
    return buildingReponse;
  }
}
