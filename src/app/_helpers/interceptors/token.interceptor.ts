import {
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse, HttpHeaders,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpUserEvent
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any> | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    const authHeader = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'X-Tribes-Token': localStorage.getItem(environment.tribes_token)
      }
  });
    console.log(authHeader);
    return next.handle(authHeader);
  }
}
