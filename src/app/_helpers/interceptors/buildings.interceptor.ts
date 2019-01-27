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
      } else if (req.method === 'POST') {
        if (!req.body) {
          response = {
            error: 'error',
            message: 'Missing parameter(s): type!',
          };
          return utilities.sendResponse(response, 400);
        } else if (req.body !== 'academy' &&
          req.body !== 'mine' &&
          req.body !== 'factory' &&
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
    } else if (req.body && req.url.endsWith(`/${ req.params.get('id') }`)) {
      const id: number = parseInt(req.params.get('id'), 10);
      const building = buildingsMock.findBuilding(id);
      if (req.method === 'PUT') {
        if (building) {
          building.level += 1;
          buildingsMock.updateBuilding(building);
          response = building;
        } else if (building === undefined) {
          response = {
            error: 'error',
            message: 'Building not found',
          };
          return utilities.sendResponse(response , 404);
        }
      }
      return utilities.sendResponse({ response }, 200);
    }
    return next.handle(req);
  }
}
