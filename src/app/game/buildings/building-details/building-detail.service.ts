import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Building} from '../../../_models/building.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingDetailService {

  constructor(private http: HttpClient) { }

  levelUpBuilding(building: Building) {
    return this.http.put(`/game/buildings/${building.id}`,
      {
        id: building.id,
        level: building.level
      });
  }

}
