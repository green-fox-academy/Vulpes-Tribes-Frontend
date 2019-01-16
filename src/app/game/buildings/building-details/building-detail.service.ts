import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Building } from '../../../_models/building.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BuildingDetailService {

  constructor(private http: HttpClient) { }

  levelUpBuilding(building: Building) {
    return this.http
      .put(`${environment.getBuildings}/${building.id}`,
      {
        id: building.id,
        level: building.level,
      });
  }
}
