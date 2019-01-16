import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BuildingResponseMock } from '../mocks/buildingResponse.mock';
import { InterceptorUtilities } from '../../_utilities/interceptor.utilities';

const utilities = new InterceptorUtilities();

@Injectable()
export class BuildingsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const buildingsMock = new BuildingResponseMock();
    const buildings = buildingsMock.buildings;
    console.log(req.body);

    if (req.url.endsWith(environment.getBuildings)) {
      return utilities.sendResponse({ buildings } , 200);
    } else if (req.url.endsWith(environment.createBuilding)) {
      const newBuilding = buildingsMock.createBuilding(req.body.type);
      return utilities.sendResponse({ type: newBuilding.type }, 200);
    } else if (req.body && req.url.endsWith(`/${req.body.id}`)) {
        const building = buildingsMock.findBuilding(req.body.id);
        if (req.method === 'PUT') {
          building.level += 1;
          buildingsMock.updateBuilding(building);
          return utilities.sendResponse(building, 200);
        } else {
          return utilities.sendResponse({ building }, 200);
        }
      }
    }
  }

