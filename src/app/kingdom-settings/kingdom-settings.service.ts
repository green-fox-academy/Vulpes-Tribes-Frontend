import { Injectable } from '@angular/core';
import { KingdomService } from '../services/kingdom.service';
import { KingdomSettingsModel } from './models/kingdom-settings.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KingdomSettingsService {

  settings: KingdomSettingsModel;

  constructor(private kingdomService: KingdomService) { }

  getSettings(): Observable<any> {
    return this.kingdomService.getKingdom();
  }
  
  updateSettings(name): Observable<any> {
    return this.kingdomService.updateKingdom(name);
  }
}
