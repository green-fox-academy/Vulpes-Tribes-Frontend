import { Injectable } from '@angular/core';
import { Kingdom } from '../_models/kingdom.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class KingdomService {
  kingdom: Kingdom;

  constructor(private http: HttpClient) { }

  getKingdom(): Observable<any> {
    return this.http.get<Kingdom>('/kingdom');
  }
}
