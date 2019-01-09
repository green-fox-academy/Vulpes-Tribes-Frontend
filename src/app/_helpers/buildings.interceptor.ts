import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

const buildings = [
  {
    'id': 123,
    'type': 'townhall',
    'level': 1,
    'hp': 100,
    'started_at': 1231232312,
    'finished_at': 7652146122
  },
  {
    'id': 124,
    'type': 'academy',
    'level': 1,
    'hp': 100,
    'started_at': 1231232312,
    'finished_at': 7652146122
  },
  {
    'id': 125,
    'type': 'factory',
    'level': 1,
    'hp': 100,
    'started_at': 1231232312,
    'finished_at': 7652146122
  },
  {
    'id': 126,
    'type': 'mine',
    'level': 1,
    'hp': 100,
    'started_at': 1231232312,
    'finished_at': 7652146122
  },
];

@Injectable()
export class BuildingsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/game/buildings')) {
      return new Observable(observer => observer.next(new HttpResponse<any>({
        body: {
          buildings,
        },
        status: 200,
      })
      ));
    }
    return next.handle(req);
  }
}
