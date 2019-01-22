import { Injectable } from '@angular/core';
import {BuildingsService} from '../buildings/buildings.service';
import {Building} from '../../_models/building.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {

  constructor(private buildingsService: BuildingsService) {
  }

  getUnfinishedBuildings(): Building[] {
    return this.buildingsService.filterBuildings('unfinished');
  }

}
