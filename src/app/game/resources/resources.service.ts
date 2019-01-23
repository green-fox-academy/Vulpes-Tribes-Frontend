import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resources } from './../../_models/resources.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
<<<<<<< HEAD
export class ResourcesService {
  resourceInfo: Resources;
  showResources: any;

  constructor(private http: HttpClient) {}

  getResources(): Observable<any> {
    return this.http.get('/game/resources');
=======
export class ResourcesService implements Resources {
  amount: number;
  type: string;
  generation: number;
  mockDb() {
    const resources = [
      this.type = 'food',
      this.amount = 500,
      this.generation = 0,
    ];
>>>>>>> 17f90ece5b40c323caf080b179a30b6c1f68c34d
  }

}
