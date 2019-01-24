import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {ENDPOINTS} from '../../../environments/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {

  constructor(private http: HttpClient) {}

  getResources(): Observable<any> {
    return this.http.get(ENDPOINTS.getResources, { observe: 'response' });
  }

}
