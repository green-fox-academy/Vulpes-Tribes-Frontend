import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resources } from './../../_models/resources.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  resourceInfo: Resources;
  showResources: any;

  constructor(private http: HttpClient) {}

  getResources(): Observable<any> {
    return this.http.get('/game/resources');
  }

}
