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
    return new Observable(observer => {
      let ableToBuild: boolean;
      this.resourcesService.getResources().subscribe(response => {
        this.resources = response;
        if (buildingType === 'academy') {
          ableToBuild = this.resources[1].amount > buildingLevel * 100;
          this.resources[1].amount -= buildingLevel * 100;
        } else if (buildingType === 'factory') {
          ableToBuild = (this.resources[1].amount  > buildingLevel * 50);
          this.resources[1].amount -= buildingLevel * 100;

        } else if (buildingType === 'mine') {
          ableToBuild = (this.resources[1].amount  > buildingLevel * 50);
          this.resources[1].amount -= buildingLevel * 100;

        } else {
          ableToBuild = false;
        }
        observer.next(ableToBuild);
        observer.complete();
      });
    });
  }
}
