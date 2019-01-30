import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../environments/endpoints';
import { PurchaseService } from '../../sharedServices/purchase.service';

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
}
