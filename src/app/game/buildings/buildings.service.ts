import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  constructor(private http: HttpClient) { }

  getBuildings(): Observable<any> {
    console.log(this.http.get('/game/buildings', {observe: 'response'}));
    return this.http.get('/game/buildings', {observe: 'response'});
  }
}
