import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Building} from '../../_models/building.model';
import {environment} from '../../../environments/environment';
import {el} from '@angular/platform-browser/testing/src/browser_util';

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
      buildings.push(newBuilding);
      return this.sendResponse({
        type: newBuilding.type,
        status: 200
      });
    } else if (req.url.endsWith(`/game/buildings/${req.body.id}`) && req.method === 'PUT') {
      let buildingToUpdate = this.findBuilding(req.body.id);
      buildingToUpdate.level += 1;
      buildings[buildings.indexOf(this.findBuilding(req.body.id))] = buildingToUpdate;
      return this.sendResponse({
        status: 200
      });
    } else if (req.url.endsWith('/game/buildings/' + req.body.id) && req.method === 'GET') {
      let building = this.findBuilding(req.body.id);
      return this.sendResponse({
        building
      });
    }
    return next.handle(req);
  }

  createBuilding(id: number, type: string): Building {
    return new Building(id, type);
  }

  findBuilding(buildingId: number): Building {
    for (let i = 0; i < buildings.length; i++) {
      if (buildings[i].id === buildingId) {
        return buildings[i];
      }
    }
  }

  sendResponse(responseBody: {}): Observable<any> {
    return new Observable<any>(
      observer => {
        observer.next(new HttpResponse<any>(
          {
            body: {
              responseBody
            }
          }
        ));
        observer.complete();
      });
  }

}


