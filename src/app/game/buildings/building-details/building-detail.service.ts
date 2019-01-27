import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Building } from '../../../_models/building.model';
import { ENDPOINTS } from '../../../../environments/endpoints';
import { Observable } from 'rxjs';
import { AlertService } from '../../../alert/alert.service';

@Injectable({
  providedIn: 'root',
})
export class BuildingDetailService {

  constructor(private http: HttpClient,
              private alertService: AlertService) {
  }

  levelUpBuilding(building: Building): Observable<any> {
    return new Observable((observer) => {

      this.http
        .put(`${ ENDPOINTS.getBuildings }/${ building.id }`,
             { level: building.level },
             { params: new HttpParams().set('id', building.id.toString()), observe: 'response' })
        .subscribe((response) => {
          const buildingToUpdate = building;
          const buildings: Building[] = JSON.parse(localStorage.getItem('buildings'));
          buildings.find(building => building.id === buildingToUpdate.id).level += 1;
          localStorage.setItem('buildings', JSON.stringify(buildings));
          observer.next(response);
          observer.complete();
        },         error => this.alertService.error(error.statusText));
    });
  }
}
