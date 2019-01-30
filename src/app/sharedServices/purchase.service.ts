import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  ableToPurchaseBuilding(buildingType: string, buildingLevel: number): boolean {
    this.resourcesService.getResources().subscribe(response => this.resources = response);
    if (buildingType === 'academy') {
      return (this.resources[1].amount < buildingLevel * 100);
    } else if (buildingType === 'factory') {
      return (this.resources[1].amount < buildingLevel * 50);
    } else if (buildingType === 'mine') {
      return (this.resources[1].amount < buildingLevel * 50);
    } else {
      return false;
    }
  }
}
