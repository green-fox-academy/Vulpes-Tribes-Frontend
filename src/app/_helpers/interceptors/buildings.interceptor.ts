import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Building} from '../../_models/building.model';
import {environment} from '../../../environments/environment';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {BuildingResponseMock} from '../mocks/buildingResponse.mock';



@Injectable()
export class BuildingsInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const buildingsMock = new BuildingResponseMock();
    let buildings = buildingsMock.buildings;

    if (req.url.endsWith('/game/buildings')) {
      return new Observable(observer => observer.next(new HttpResponse<any>({
          body: {
            buildings,
          },
          status: 200,
        })
      ));
    } else if (req.url.endsWith(environment.createBuilding)) {
      let newBuilding = buildingsMock.createBuilding(req.body.type);
      return this.sendResponse({
        type: newBuilding.type,
        status: 200
      });
    } else if (req.url.endsWith(`/game/buildings/${req.body.id}`) && req.method === 'PUT') {
      let buildingToUpdate = buildingsMock.findBuilding(req.body.id);
      buildingToUpdate.level += 1;
      buildingsMock.updateBuilding(buildingToUpdate);
      return this.sendResponse({
        status: 200
      });
    } else if (req.url.endsWith('/game/buildings/' + req.body.id) && req.method === 'GET') {
      let building = buildingsMock.findBuilding(req.body.id);
      return this.sendResponse({
        building
      });
    }
    return next.handle(req);
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


