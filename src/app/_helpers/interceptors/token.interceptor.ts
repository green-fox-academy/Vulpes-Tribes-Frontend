import {
  HttpErrorResponse,
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
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { InterceptorUtilities } from '../../_utilities/interceptor.utilities';
import { error } from '@angular/compiler/src/util';

const utilities = new InterceptorUtilities();

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any> |
      HttpHeaderResponse |
      HttpProgressEvent |
      HttpResponse<any> |
      HttpUserEvent<any>> {

    const token: string = localStorage.getItem(environment.tribes_token);

    if (token) {
      const authHeader = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'X-Tribes-Token': localStorage.getItem(environment.tribes_token),
        },
      });
      return next.handle(authHeader);
    } else {
      next.handle(req);
    }
  }
}
