import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TroopsService {

  constructor(private http: HttpClient) {}

  getTroops(): Observable<any> {
    return this.http.get('/game/troops', {observe: 'response'});
  }
}
