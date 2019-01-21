import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuildingResponseMock } from '../mocks/buildingResponse.mock';
import { InterceptorUtilities } from '../../_utilities/interceptor.utilities';
import { ENDPOINTS } from '../../../environments/endpoints';
import {Building} from '../../_models/building.model';

const utilities = new InterceptorUtilities();

@Injectable()
export class BuildingsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const buildingsMock = new BuildingResponseMock();
    const buildings: Building[] = buildingsMock.buildings;
    if (req.url.endsWith(ENDPOINTS.getBuildings)) {
      if (req.method === 'GET') {
        if (req.params.get('status') === 'finished') {
          const finishedBuildings = buildings.filter(building => building.finishedAt <= Date.now());
          return utilities.sendResponse({ finishedBuildings }, 200);
        } else if (req.params.get('status') === 'unfinished') {
          const unfinishedBuildings = buildings.filter(building => building.finishedAt > Date.now());
          return utilities.sendResponse({ unfinishedBuildings }, 200);
        }
        return utilities.sendResponse({ buildings } , 200);
      }
    } else if (req.url.endsWith(ENDPOINTS.createBuilding)) {
      const newBuilding = buildingsMock.createBuilding(req.body.type);
      return utilities.sendResponse({ newBuilding }, 200);
    }
    if (req.body && req.url.endsWith(`/${req.body.id}`)) {
      const building = buildingsMock.findBuilding(req.body.id);
      if (req.method === 'PUT') {
        building.level += 1;
        buildingsMock.updateBuilding(building);
        return utilities.sendResponse(building, 200);
      }
      return utilities.sendResponse({ building }, 200);
    }
  }
}
