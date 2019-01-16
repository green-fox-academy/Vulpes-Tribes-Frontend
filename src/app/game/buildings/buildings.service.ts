import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class BuildingsService {

  constructor(private http: HttpClient) { }

  getBuildings(): Observable<any> {
    return this.http.get('/game/buildings', { observe: 'response' });
  }

  createBuilding(buildingType: string): Observable<any> {
    console.log('Call to create new building made');
    return this.http.post<any>(environment.createBuilding, {
      type: buildingType,
    });
  }
}
