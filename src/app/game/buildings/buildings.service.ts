import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../../../environments/endpoints';
import { Building } from '../../_models/building.model';
import { environment } from '../../../environments/environment';
import { NotificationsService } from '../../services/notifications.service';

const URL = environment.serverApi + ENDPOINTS.getBuildings;

@Injectable({
  providedIn: 'root',
})

export class BuildingsService {

  constructor(private http: HttpClient,
              private notificationService: NotificationsService) {
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
            .createNotification('building', newBuilding.type, newBuilding.startedAt, newBuilding.finishedAt);
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
        observer.next(JSON.parse(localStorage.getItem('buildings')));
        observer.complete();
      } else {
        this.getBuildingsFromBackend().subscribe((response) => {
          localStorage.setItem('buildings', JSON.stringify(response.body));
          observer.next(response.body);
          observer.complete();
        });
      }
    });
  }

  updateLocalStorage(building: Building) {
    const buildings: Building[] = JSON.parse(localStorage.getItem('buildings'));
    buildings.push(building);
    localStorage.setItem('buildings', JSON.stringify(buildings));
  }
}
