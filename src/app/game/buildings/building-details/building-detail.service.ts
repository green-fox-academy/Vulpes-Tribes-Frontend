import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Building } from '../../../_models/building.model';
import { ENDPOINTS } from '../../../../environments/endpoints';
import {BuildingsService} from '../buildings.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuildingDetailService {

  constructor(private http: HttpClient) { }

  levelUpBuilding(building: Building): Observable<any> {
    return new Observable((observer) => {
      this.http
        .put(`${ENDPOINTS.getBuildings}/${building.id}`, { id: building.id, level: building.level }, { observe: 'response' })
        .subscribe((response) => {
          if (response['status'] === 200) {
            const buildingToUpdate = building;
            const buildings: Building[] = JSON.parse(localStorage.getItem('buildings'));
            buildings.find(building => building.id === buildingToUpdate.id).level += 1;
            localStorage.setItem('buildings', JSON.stringify(buildings));
            observer.next(response);
            observer.complete();
          } else {
            observer.next(response);
            observer.complete();
          }
        });
    });
  }
}
