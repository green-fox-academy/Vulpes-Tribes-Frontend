import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../environments/endpoints';
import { environment } from '../../../environments/environment';

const url = environment.serverApi + ENDPOINTS.getResources;

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {

  constructor(private http: HttpClient) {
  }

  getResources(): Observable<any> {
    return new Observable<any>((observer) => {
      this.http.get(url)
        .subscribe((response) => {
          observer.next(response);
          observer.complete();
        });
    });
  }
}
