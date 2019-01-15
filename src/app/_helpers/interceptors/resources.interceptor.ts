import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable()
export class ResourceInterceptor implements HttpInterceptor {
  constructor() {
  }

  // function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ):
    Observable<HttpEvent<any>> {
    // how to update the request Parameters

    if (request.url.endsWith('/kingdom/resources') &&
      (request.method === 'GET')) {
      return new Observable(observable => {
        observable.next(new HttpResponse<any>(
          {
            body:
              {
                amount: 500,
                type: 'food',
                generation: 0
              },
            status: 200
          }
        ));
        observable.complete();
      });
    }
    const newRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer of resources')
    });
    // logging the updated Parameters to browser's console
    return next.handle(request).pipe(
      tap(
        event => {
          // logging the http response to browser's console in case of a success
          if (event instanceof HttpResponse) {
            console.log(event);
          }
        },
        () => {
          // logging the http response to browser's console in case of a failure
          if (event instanceof HttpResponse) {
            if (event instanceof HttpErrorResponse) {
              console.log('api call error :', event);
            }
            console.log(event);
          }
          console.log(event);
        }
      ));
  }
}
