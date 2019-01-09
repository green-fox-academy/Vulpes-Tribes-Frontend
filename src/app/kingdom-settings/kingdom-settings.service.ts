import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KingdomService} from '../services/kingdom.service';
import {KingdomSettingsModel} from '../kingdom-settings/models/kingdom-settings.model';
import { kingdomMock } from '../services/mock-Kingdom';
import { Kingdom } from '../_models/kingdom.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KingdomSettingsService {

  settings: KingdomSettingsModel;

  constructor(private kingdomService: KingdomService) { }

  getSettings(): Observable<any> {
    console.log(this.kingdomService.getKingdom());
    return this.kingdomService.getKingdom();
  }
}

