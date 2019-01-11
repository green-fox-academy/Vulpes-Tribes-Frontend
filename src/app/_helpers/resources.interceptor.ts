import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';


@Injectable()
export class ResourceInterceptor implements HttpInterceptor {
  constructor() {}
  // function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ):
   Observable<HttpEvent<any>> {
    // how to update the request Parameters

    if (request.url.endsWith('/game/resources'))  {
      return new Observable(observable => {
        observable.next(new HttpResponse<any>(
          {
            body: {
              resources: [
              {
                amount: 500,
                type: 'food',
                generation: 0
              }],
              resources2: [
              {
                amount: 340,
                type: 'money',
                generation: 1
              }
            ],
            status: 200
          }
        }));
        console.log(observable);
        observable.complete();
      });
    }
  }
}
