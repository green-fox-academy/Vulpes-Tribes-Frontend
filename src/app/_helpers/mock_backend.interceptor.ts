import {
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpUserEvent
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class MockBackend implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any> | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>  {
    if (req.url.endsWith('/login') && (req.method === 'POST')) {
      console.log('Intercepted', req);
      return new Observable(observer => {
        observer.next(new HttpResponse<any>(
          {body:
                { id: 1,
                  tribes_token: '56987'
                }, status: 200}
        ));
        observer.complete();
      });
    }
    return next.handle(req);

  }

}
