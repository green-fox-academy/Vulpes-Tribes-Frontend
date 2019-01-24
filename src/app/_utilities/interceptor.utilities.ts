import { Observable } from 'rxjs';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

export class InterceptorUtilities {
  sendResponse(responseBody: {}, status: number): Observable<any> {
    return new Observable<any>(
      (observer) => {
        if (status < 400) {

          observer.next(new HttpResponse<any>(
            {
              body: responseBody,
              status,
            },
          ));
          observer.complete();
        } else {
          observer.error(new HttpErrorResponse(
            {
              status: status,
            }));
          observer.complete();
        }
      });
  }
}
