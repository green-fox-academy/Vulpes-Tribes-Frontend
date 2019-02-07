import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { ENDPOINTS } from '../../../environments/endpoints';
import { InterceptorUtilities } from '../../_utilities/interceptor.utilities';
import { Resources } from '../../_models/resources.model';

const utilities = new InterceptorUtilities();

@Injectable()
export class ResourceInterceptor implements HttpInterceptor {
  // function which will be called for all http calls
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const resources: Resources[] = [
      {
        amount: 500,
        type: 'food',
        generation: 2,
      },
      {
        amount: 10000,
        type: 'money',
        generation: 1,
      },
    ];
    let response;
    if (req.url.endsWith(ENDPOINTS.getResources)) {
      response = resources;
      return utilities.sendResponse(response, 200);
    }
    return next.handle(req);
  }
}
