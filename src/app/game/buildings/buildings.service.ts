import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AlertService} from '../../alert/alert.service';
import {Building} from '../../_models/building.model';

@Injectable({
  providedIn: 'root'
})

export class BuildingsService {

  constructor(private http: HttpClient, private allertService: AlertService) { }

  getBuildings(): Observable<any> {
    console.log(this.http.get('/game/buildings', {observe: 'response'}));
    return this.http.get('/game/buildings', {observe: 'response'});
  }

  createBuilding(buildingType: string): Observable<any> {
    console.log('Call to create new building made');
    return this.http.post<any>(environment.createBuilding, {
      type: buildingType
    });
  }
}
