import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../../../environments/endpoints';
import { Building } from '../../_models/building.model';

@Injectable({
  providedIn: 'root',
})

export class BuildingsService {

  building;

  constructor(private http: HttpClient) {
  }

  getBuildingsFromBackend(): Observable<any> {
    return this.http
      .get(ENDPOINTS.getBuildings, { observe: 'response' });
  }

  createBuilding(buildingType: string): Observable<Building> {
    return new Observable<Building>((observer) => {
      this.http.post(ENDPOINTS.getBuildings, buildingType)
        .subscribe((response) => {
          this.updateLocalStorage(response['response']);
          observer.next(response['response']);
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

  showAllBuildings(): Observable<Building[]> {
    return new Observable<Building[]>((observer) => {
      if (localStorage.getItem('buildings')) {
        observer.next(JSON.parse(localStorage.getItem('buildings')));
        observer.complete();
      } else {
        this.getBuildingsFromBackend().subscribe((response) => {
          localStorage.setItem('buildings', JSON.stringify(response.body.response));
          observer.next(response.body.response);
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
