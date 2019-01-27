import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuildingResponseMock } from '../mocks/buildingResponse.mock';
import { InterceptorUtilities } from '../../_utilities/interceptor.utilities';
import { ENDPOINTS } from '../../../environments/endpoints';
import { Building } from '../../_models/building.model';

const utilities = new InterceptorUtilities();

@Injectable()
export class BuildingsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const buildingsMock = new BuildingResponseMock();
    const buildings: Building[] = buildingsMock.buildings;
    let response;
    if (req.url.endsWith(ENDPOINTS.getBuildings)) {
      if (req.method === 'GET') {
        response = buildings;
        console.log(response);
      } else if (req.method === 'POST') {
        if (!req.body) {
          response = {
            error: 'error',
            message: 'Missing parameter(s): type!',
          };
          return utilities.sendResponse(response, 400);
        } else if (req.body !== 'academy' ||
                   req.body !== 'mine' ||
                   req.body !== 'farm' ||
                   req.body !== 'townhall') {
          response = {
            error: 'error',
            message: 'Invalid building type',
          };
          return utilities.sendResponse(response, 406);
        } else {
          response = buildingsMock.createBuilding(req.body);
        }
      }
      return utilities.sendResponse({ response }, 200);
    } else if (req.body && req.url.endsWith(`/${req.body.id}`)) {
      console.log(req.body);
      const building = buildingsMock.findBuilding(req.body.id);
      console.log(building);
      if (req.method === 'PUT') {
        building.level += 1;
        buildingsMock.updateBuilding(building);
        response = building;
      }
      return utilities.sendResponse({ response }, 200);
    }
    return next.handle(req);
  }
}
