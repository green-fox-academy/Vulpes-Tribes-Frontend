import {
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse, HttpHeaders,
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
    if (localStorage.getItem(environment.tribes_token)) {
      const requestWithAuthHEader = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'X-Tribes-Token': localStorage.getItem(environment.tribes_token),
        },
      });
      return next.handle(requestWithAuthHEader);
    } else {
      return next.handle(req);
    }

  }
}
