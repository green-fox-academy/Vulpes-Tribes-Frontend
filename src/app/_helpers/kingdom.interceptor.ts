import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse,
  HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Kingdom } from '../_models/kingdom.model';

const kingdom: Kingdom = {
  'id': 213,
  'name': 'My Kingdom',
  'user_id': 22,
  'buildings': [
    {
      'id': 123,
      'type': 'townhall',
      'level': 1,
      'hp': 100,
      'started_at': 1231232312,
      'finished_at': 7652146122
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
      'started_at': 1231232312,
      'finished_at': 7652146122
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
        if (req.method === 'PUT') {
          kingdom.name = req.body.name;
          return new Observable(observer => {
            observer.next(new HttpResponse<Kingdom>(
              {
                body: kingdom.name,
                status: 200,
              }));
              observer.complete();
          }); 
        }
  }

}