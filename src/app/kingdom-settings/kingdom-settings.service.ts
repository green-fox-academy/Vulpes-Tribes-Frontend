import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KingdomService} from '../services/kingdom.service';
import {KingdomSettingsModel} from '../kingdom-settings/models/kingdom-settings.model';


@Injectable({
  providedIn: 'root'
})
export class KingdomSettingsService {

  constructor(private kingdomService: KingdomService) { }

getSettings(): KingdomSettingsModel {

}
}

