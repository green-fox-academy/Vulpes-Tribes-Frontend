import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Building} from '../_models/building.model';
import {environment} from '../../environments/environment';

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
    } else if (req.url.endsWith(environment.createBuilding)) {
      let newBuilding = this.createBuilding(buildings.length, req.body);
      console.log('==========');
      console.log('POST call intercepted');
      console.log(buildings);
      buildings.push(newBuilding);
      return new Observable<any>(
        observer => {
          observer.next(new HttpResponse<any>(
            {
              body: {
                type: newBuilding.type,
                status: 200
              }
            }
          ));
        observer.complete();
        });
      console.log(buildings);
      console.log('==========');
    }
    return next.handle(req);
  }

  createBuilding(id: number, type: string): Building {
    return new Building(id, type);
  }

}


