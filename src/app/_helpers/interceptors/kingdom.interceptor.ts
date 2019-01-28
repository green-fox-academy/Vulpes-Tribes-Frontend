import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpResponse,
  HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Kingdom } from '../../_models/kingdom.model';
<<<<<<< HEAD
import { LoaderService } from 'src/app/services/loader.service';
=======
import { ENDPOINTS } from '../../../environments/endpoints';
import { InterceptorUtilities } from '../../_utilities/interceptor.utilities';
>>>>>>> b9109b80b093f8e9acae827bcc1ee5d7c9ca4b9a

let kingdom: Kingdom = {
  id: 213,
  name: 'My Kingdom',
  userId: 22,
  buildings: [
    {
      id: 123,
      type: 'townhall',
      level: 1,
      hp: 100,
      startedAt: 1231232312,
      finishedAt: 7652146122,
    },
  ],
  resources: [
    {
      type: 'food',
      amount: 223,
      generation: 0,
    },
  ],
  troops: [
    {
      id: 123,
      level: 1,
      hp: 100,
      attack: 50,
      defence: 20,
      startedAt: 1231232312,
      finishedAt: 7652146122,
    },
  ],
  location: {
    x: 12,
    y: 24,
  },
};

const utilities = new InterceptorUtilities();

@Injectable()
export class KingdomInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) { }
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
<<<<<<< HEAD
  Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    this.showLoader();
      if (req.url.endsWith('/kingdom') && (req.method === 'GET')) {
          return new Observable(observer => {
            observer.next(new HttpResponse<Kingdom>(
              {
                  body: kingdom,
                  status: 200,
              }));
            observer.complete();
            setTimeout(() => console.log( 'loading'), 2000 )
            this.hideLoader();
          });
        }
        else if (req.url.endsWith('/kingdom') && (req.method === 'PUT')) {
          return new Observable(observer => {
            observer.next(new HttpResponse<any>(
              {
                body: kingdom,
                status: 200,
              }));
              observer.complete();
          }); 
        }
        next.handle(req);
=======
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    if (req.url.endsWith(ENDPOINTS.getKingdom) && (req.method === 'GET')) {
      return utilities.sendResponse({ kingdom }, 200);
    } else if (req.url.endsWith(ENDPOINTS.getKingdom) && (req.method === 'PUT')) {
      kingdom.name = req.body;
      return utilities.sendResponse({ kingdom } , 200);
    } else {
      return next.handle(req);
    }
>>>>>>> b9109b80b093f8e9acae827bcc1ee5d7c9ca4b9a
  }
}
