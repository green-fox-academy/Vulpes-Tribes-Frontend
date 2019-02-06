import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../environments/endpoints';
import { Resources } from 'src/app/_models/resources.model';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {

  constructor(private http: HttpClient) {
  }

  getResources(): Observable<any> {
    return new Observable<any>((observer) => {
      this.http.get(ENDPOINTS.getResources)
        .subscribe((response) => {
          observer.next(response);
          observer.complete();
        });
    });
  }
  updateResourceLocalStorage(resource: Resources) {
    const resources: Resources = JSON.parse(localStorage.getItem('type'));
    resources.push(resource);
    localStorage.setItem('resources', JSON.stringify(resources));
  }
  // getResourcesFromBackend(): Observable<any> {
  //   return this.http
  //     .get(ENDPOINTS.getResources, { observe: 'response' })
  //     }
}
