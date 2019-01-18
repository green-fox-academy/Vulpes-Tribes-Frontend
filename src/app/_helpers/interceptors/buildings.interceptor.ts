import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BuildingResponseMock } from '../mocks/buildingResponse.mock';
import { InterceptorUtilities } from '../../_utilities/interceptor.utilities';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

const utilities = new InterceptorUtilities();

@Injectable()
export class BuildingsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const buildingsMock = new BuildingResponseMock();
    let buildings = buildingsMock.buildings;
    if (req.url.endsWith(environment.getBuildings)) {
      if (req.method === 'GET') {
        return utilities.sendResponse({ buildings } , 200);
      } else if (req.method === 'PUT') {
        console.log(req);
        buildingsMock.updateMultipleBuildings(req.body);
        const updatedBuildings = buildingsMock.buildings;
        return utilities.sendResponse({ updatedBuildings }, 200);
      }
    } else if (req.url.endsWith(environment.createBuilding)) {
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
