import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

export class InterceptorUtilities {
  sendResponse(responseBody: {}, status: number): Observable<any> {
    return new Observable<any>(
      (observer) => {
        observer.next(new HttpResponse<any>(
          {
            body: {
              responseBody,
            },
            status,
          },
        ));
        observer.complete();
      });
  }
}
