import { TestBed } from '@angular/core/testing';

import { KingdomService } from '../services/kingdom.service';
import { KingdomSettingsService} from './kingdom-settings.service';
import { async } from 'q';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Kingdom } from '../_models/kingdom.model';


describe('KingdomSettingsService', () => {
  let service: KingdomSettingsService;
  let kingdomService: KingdomService;

  beforeEach(async() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([])
    ],
    providers: [
      KingdomSettingsService
    ]
  });
});

  beforeEach(() => {
    service = TestBed.get(KingdomSettingsService);
    kingdomService = TestBed.get(KingdomService);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the getSettings function', () => {
 //    let kingdom: Kingdom;
     spyOn(kingdomService, 'getKingdom');
     service.getSettings();
     expect(kingdomService.getKingdom).toHaveBeenCalled();
//    service.getSettings().subscribe(response => {
//       kingdom = response.body;
//        expect(kingdom.name).toEqual('My Kingdom');
  });
});
// });
