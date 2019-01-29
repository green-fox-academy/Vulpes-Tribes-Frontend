import { Injectable } from '@angular/core';
import { Kingdom } from '../_models/kingdom.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../environments/endpoints';
import { environment } from '../../environments/environment';

const url = environment.serverApi + ENDPOINTS.getKingdom;

@Injectable({
  providedIn: 'root',
})
export class KingdomService {
  constructor(private http: HttpClient) { }

  getKingdom(): Observable<any> {
    return this.http.get<Kingdom>(url, { observe: 'response' });
  }
  updateKingdom(name): Observable<any> {
    return this.http.put<any>(url, name, { observe:'response' });
  }
}
