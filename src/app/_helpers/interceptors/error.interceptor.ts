import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'; // tslint:disable-line
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import construct = Reflect.construct;
import { AlertService } from '../../alert/alert.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ENDPOINTS } from '../../../environments/endpoints';
import { LogoutService } from '../../sharedServices/logout.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private alertService: AlertService,
              private router: Router,
              private logoutService: LogoutService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error.message);
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            errorMessage = `${error.message}`;
          } else {
            errorMessage =
              `Error code : ${error.status}\nError message: ${error.error.message}`;
          }
          this.alertService.error(errorMessage);
          return throwError(error);
        }),
      );
  }
}
