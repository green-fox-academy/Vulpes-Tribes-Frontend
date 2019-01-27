import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'; // tslint:disable-line
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

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
            `Error code : ${error.status}\nError message: ${error.statusText}`;
          }
          console.log(errorMessage);
          return throwError(error);
        }),
      );
  }
}
