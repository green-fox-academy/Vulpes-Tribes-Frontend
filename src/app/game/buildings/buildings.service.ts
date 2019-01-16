import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class BuildingsService {

  constructor(private http: HttpClient) {
  }

  getBuildings(): Observable<any> {
    const buildings =  this.http.get(environment.getBuildings, { observe: 'response' });
    buildings.subscribe((response) => {
      localStorage.setItem('buildings', JSON.stringify(response.body['buildings']));
    });
    return buildings;
  }

  createBuilding(buildingType: string): Observable<any> {
    return this.http.post<any>(environment.createBuilding, {
      type: buildingType,
    });
  }
}
