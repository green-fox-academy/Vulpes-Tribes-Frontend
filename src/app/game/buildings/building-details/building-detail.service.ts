import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Building } from '../../../_models/building.model';
import { ENDPOINTS } from '../../../../environments/endpoints';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PurchaseService } from '../../../sharedServices/purchase.service';

const URL = environment.serverApi + ENDPOINTS.getBuildings;

@Injectable({
  providedIn: 'root',
})
export class BuildingDetailService {

  constructor(private http: HttpClient,
              private purchaseService: PurchaseService) {
  }

  levelUpBuilding(building: Building): Observable<any> {
    return new Observable((observer) => {
        this.purchaseService.ableToPurchaseBuilding(building.type, building.level)
          .subscribe((response) => {
            if (response) {
              this.http
                .put(`${ URL }/${ building.id }`, { id: building.id, level: building.level }, { observe: 'response' })
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
            }
          });
      },
    );
  }
}
