import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Resources } from '../_models/resources.model';
import { ResourcesService } from '../game/resources/resources.service';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {

  private resources: Resources;

  private updatedNotifications = new BehaviorSubject<Resources>(this.resources);
  currentNotifications = this.updatedNotifications.asObservable();

  constructor(private resourcesService: ResourcesService) {
  }

  ableToPurchaseBuilding(buildingType: string, buildingLevel: number): Observable<any> {
    return new Observable((observer) => {
      this.resourcesService.getResources().subscribe((response) => {
        let ableToBuild: boolean = false;
        const objectPrice = this.calculateObjectPrice(buildingType, buildingLevel);
        this.resources = response;
        if (objectPrice < this.resources[1].amount) {
          ableToBuild = true;
          this.resources[1].amount -= objectPrice;
        }
        observer.next(ableToBuild);
        observer.complete();
      });
    });
  }

  calculateObjectPrice(type: string, level: number): number {
    let basePrice: number;
    if (type === 'barracks') {
      basePrice = 150;
    } else if (type === 'farm') {
      basePrice = 80;
    } else if (type === 'mine') {
      basePrice = 100;
    } else if (type === 'troop') {
      basePrice = 20;
    } else if (type === 'townhall') {
      basePrice = 300;
    }
    return (basePrice * level);
  }
}
