import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'; // tslint:disable-line
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            errorMessage = `${error.message}`;
          } else {
            errorMessage = `Error code : ${error.status} \n
                            Error message: ${error.message}`;
          }
          console.log(errorMessage);
          return throwError(error);
        }),
      );
  }
}
