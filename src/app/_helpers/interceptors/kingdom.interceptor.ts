import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse,
  HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Kingdom } from '../../_models/kingdom.model';

const kingdom: Kingdom = {
  'id': 213,
  'name': 'My Kingdom',
  'userId': 22,
  'buildings': [
    {
      'id': 123,
      'type': 'townhall',
      'level': 1,
      'hp': 100,
      'startedAt': 1231232312,
      'finishedAt': 7652146122
    }
  ],
  'resources': [
    {
      'type': 'food',
      'amount': 223,
      'generation': 0
    }
  ],
  'troops': [
    {
      'id': 123,
      'level': 1,
      'hp': 100,
      'attack': 50,
      'defence': 20,
      'startedAt': 1231232312,
      'finishedAt': 7652146122
    }
  ],
  'location': {
    'x': 12,
    'y': 24
}
};


@Injectable()
export class KingdomInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
      if (req.url.endsWith('/kingdom') && (req.method === 'GET')) {
          return new Observable(observer => {
            observer.next(new HttpResponse<Kingdom>(
              {
                  body: kingdom,
                  status: 200,
              }));
            observer.complete();
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
  }

}