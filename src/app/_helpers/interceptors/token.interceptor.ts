import {
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpUserEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any> |
      HttpHeaderResponse |
      HttpProgressEvent |
      HttpResponse<any> |
      HttpUserEvent<any>> {
    const token = localStorage.getItem(environment.tribes_token);
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'X-Tribes-Token': token,
        },
      });
      return next.handle(request);
    }
  }
}
