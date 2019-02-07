import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../../../environments/endpoints';
import { Building } from '../../_models/building.model';
import { NotificationsService } from '../../sharedServices/notifications.service';
import { PurchaseService } from '../../sharedServices/purchase.service';
import { environment } from '../../../environments/environment';

const URL = environment.serverApi + ENDPOINTS.getBuildings;

@Injectable({
  providedIn: 'root',
})

export class BuildingsService {

  constructor(private http: HttpClient,
              private notificationService: NotificationsService,
              private purchaseService: PurchaseService) {
  }

  getBuildingsFromBackend(): Observable<any> {
    return this.http
      .get(URL, { observe: 'response' });
  }

  createBuilding(buildingType: string): Observable<Building> {
    return new Observable<Building>((observer) => {
      this.http.post(URL, { type: buildingType }, { observe: 'response' })
        .subscribe((response) => {
          const newBuilding: any = response.body;
          this.updateLocalStorage(newBuilding);
          this.notificationService
            .createNotification('building',
              newBuilding.type,
              newBuilding.startedAt,
              newBuilding.finishedAt);

          observer.next(newBuilding);
          observer.complete();
        });
    });
  }

  filterBuildings(status: string): Observable<Building[]> {
    return new Observable<Building[]>((observer) => {
      this.showAllBuildings()
        .subscribe((response) => {
          if (status === 'finished') {
            observer.next(response
              .filter(building => building.finishedAt <= Date.now()));
            observer.complete();
          } else if (status === 'unfinished') {
            observer.next(response
              .filter(building => building.finishedAt > Date.now()));
          }
        });
    });
  }

  initializeUnfinishedBuildingsAsNotifications() {
    this.filterBuildings('unfinished').subscribe((buildings) => {
      buildings.forEach((building) => {
        this.notificationService
          .createNotification('building', building.type, building.startedAt, building.finishedAt);
      });
    });
  }

  showAllBuildings(): Observable<Building[]> {
    return new Observable<Building[]>((observer) => {
      if (localStorage.getItem('buildings')) {
        this.getBuildingsFromBackend().subscribe((response) => {
          observer.next(this.getBuildingsFromLocalStorage());
          localStorage.setItem('buildings', JSON.stringify(response.body.buildings));
        });
      } else {
        this.getBuildingsFromBackend().subscribe((response) => {
          localStorage.setItem('buildings', JSON.stringify(response.body.buildings));
          observer.next(response.body.buildings);
        });
      }
      observer.complete();
    });
  }

  updateLocalStorage(building: Building) {
    const buildings: Building[] = this.getBuildingsFromLocalStorage();
    buildings.push(building);
    localStorage.setItem('buildings', JSON.stringify(buildings));
  }

  getHighestLevelOfSpecificBuilding(buildingType: string): number {
    const buildings: Building[] = this.getBuildingsFromLocalStorage();
    const highestLevel = buildings.filter(building => building.type === buildingType);
    highestLevel.sort(building => building.level);
    console.log(highestLevel[0].level);
    return highestLevel[0].level;
  }

  getNumberOfSpecificBuildingType(buildingType: string): number {
    const buildings: Building[] = this.getBuildingsFromLocalStorage();
    return buildings.filter(building => building.type === buildingType).length;
  }

  getBuildingsFromLocalStorage(): Building[] {
    return JSON.parse(localStorage.getItem('buildings'));
  }
}
