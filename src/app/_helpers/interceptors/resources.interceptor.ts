import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { ENDPOINTS } from '../../../environments/endpoints';
import { InterceptorUtilities } from '../../_utilities/interceptor.utilities';

const resources = [
  {
    amount: 500,
    type: 'food',
    generation: 0,
  },
  {
    amount: 340,
    type: 'money',
    generation: 1,
  },
];

const utilities = new InterceptorUtilities();

@Injectable()
export class ResourceInterceptor implements HttpInterceptor {
  // function which will be called for all http calls
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // how to update the request Parameters
    let response;
    console.log(ENDPOINTS.getResources);
    if (req.url.endsWith(ENDPOINTS.getResources)) {
      response = resources;
      console.log(response);
      return utilities.sendResponse({ response }, 200);
    }
    return next.handle(req);
  }
}
