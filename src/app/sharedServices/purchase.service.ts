import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourcesService } from '../game/resources/resources.service';
import { CONSTANTS } from '../../environments/constants';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {

  constructor(private resourcesService: ResourcesService) {
  }

  ableToPurchaseBuilding(buildingType: string, buildingLevel: number): Observable<boolean> {
    return new Observable((observer) => {
      this.resourcesService.getResources()
        .subscribe((response) => {
          console.log(response);
          const objectPrice = this.calculateObjectPrice(buildingType, buildingLevel);
          const ableToBuild: boolean = objectPrice < response[0].amount;
          observer.next(ableToBuild);
          observer.complete();
        });
    });
  }

  calculateObjectPrice(type: string, level: number): number {
    const objectType = `${ type }Price`;
    const basePrice = CONSTANTS[objectType];
    return (basePrice * level);
  }
}
