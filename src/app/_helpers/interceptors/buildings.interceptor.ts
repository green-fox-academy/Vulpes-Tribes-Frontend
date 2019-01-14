import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Building} from '../../_models/building.model';
import {environment} from '../../../environments/environment';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {BuildingResponseMock} from '../mocks/buildingResponse.mock';
import {InterceptorUtilities} from '../../_utilities/interceptor.utilities';

const utilities = new InterceptorUtilities();

@Injectable()
export class BuildingsInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const buildingsMock = new BuildingResponseMock();
    let buildings = buildingsMock.buildings;

    if (req.url.endsWith('/game/buildings')) {
      console.log('/game/buildings was called');
      console.log(utilities.sendResponse(buildings, 200));
      return utilities.sendResponse({buildings}, 200);
    } else if (req.url.endsWith(environment.createBuilding)) {
        let newBuilding = buildingsMock.createBuilding(req.body.type);
        return utilities.sendResponse({type: newBuilding.type}, 200);
    } else if (req.url.endsWith(`/game/buildings/${req.body.id}`) && req.method === 'PUT') {
        let buildingToUpdate = buildingsMock.findBuilding(req.body.id);
        buildingToUpdate.level += 1;
        buildingsMock.updateBuilding(buildingToUpdate);
        return utilities.sendResponse({}, 200);
    } else if (req.url.endsWith('/game/buildings/' + req.body.id) && req.method === 'GET') {
        let building = buildingsMock.findBuilding(req.body.id);
        return utilities.sendResponse({building}, 200);
    }
    return next.handle(req);
  }
}


