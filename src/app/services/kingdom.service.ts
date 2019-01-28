import { Injectable } from '@angular/core';
import { Kingdom } from '../_models/kingdom.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../environments/endpoints';

@Injectable({
  providedIn: 'root',
})
export class KingdomService {
  constructor(private http: HttpClient) { }

  getKingdom(): Observable<any> {
    return this.http.get<Kingdom>(ENDPOINTS.getKingdom, { observe: 'response' });
  }
  updateKingdom(name): Observable<any> {
    return this.http.put<any>(ENDPOINTS.getKingdom, name, { observe:'response' });
  }
}
