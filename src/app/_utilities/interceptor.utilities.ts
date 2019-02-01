import { Observable} from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { LoaderService } from 'src/app/services/loader.service';
import { map,tap, filter, scan } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const loaderService = new LoaderService();
export class InterceptorUtilities {
  constructor() { }
  private hideLoader(): void {
  loaderService.hide();
  }

  sendResponse(responseBody: {}, status: number): Observable<any> {
    return new Observable<any>((observer) => {
        observer.next(new HttpResponse<any>(
          {
            body: responseBody,
            status,
          },
        ));
        observer.complete();
      })
  }
}
