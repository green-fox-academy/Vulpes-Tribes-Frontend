import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ENDPOINTS } from '../../../environments/endpoints';

@Injectable({
  providedIn: 'root',
})

export class BuildingsService {

  building;

  constructor(private http: HttpClient) {
  }

  getBuildingsFromBackend(): Observable<any> {
    return this.http.get(ENDPOINTS.getBuildings, { observe: 'response' });
  }

  createBuilding(buildingType: string): Observable<any> {
    return this.http.post<any>(ENDPOINTS.createBuilding, {
      type: buildingType,
    });
  }

  showFinishedBuildings() {
    return this.http.get(ENDPOINTS.getBuildings, { params: new HttpParams().set('status', 'finished'), observe: 'response' });
  }

  showUnfinishedBuildings() {
    return this.http.get(ENDPOINTS.getBuildings, { params: new HttpParams().set('status', 'unfinished'), observe: 'response' });
  }
}
