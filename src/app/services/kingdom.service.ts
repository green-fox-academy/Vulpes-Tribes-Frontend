import { Injectable } from '@angular/core';
import { Kingdom } from '../_models/kingdom.model';
import { kingdomMock} from './mock-Kingdom';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KingdomService {

  constructor(private http: HttpClient) { }

  getKingdom(): Observable<any> {
    return this.http.get<Kingdom>('/kingdom', {observe: 'response'});
  }
}
