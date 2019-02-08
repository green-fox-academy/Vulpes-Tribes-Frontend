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
import { LoaderService } from 'src/app/services/loader.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any> |
      HttpHeaderResponse |
      HttpProgressEvent |
      HttpResponse<any> |
      HttpUserEvent<any>> {
    this.showLoader();
    if (localStorage.getItem(environment.tribes_token)) {
      const requestWithAuthHeader = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'X-Tribes-Token': localStorage.getItem(environment.tribes_token),
        },
      });
      return next.handle(requestWithAuthHeader).pipe(tap(() => this.hideLoader()));
    } else {
      return next.handle(req).pipe(tap(() => this.hideLoader()));
    }
  }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    setTimeout(() => this.loaderService.hide(), 500);
  }
}
