import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { troops } from '../mocks/mock-troops';
import { ENDPOINTS } from 'src/environments/endpoints';
import { Troop } from 'src/app/_models/troop.model';
import { InterceptorUtilities } from '../../_utilities/interceptor.utilities';

const utilities = new InterceptorUtilities();

@Injectable()
export class TroopsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let response;
    if (req.url.endsWith(ENDPOINTS.getTroops) && (req.method === 'GET')) {
      response = utilities.sendResponse({ troops }, 200);
    } else if (req.url.endsWith(ENDPOINTS.getTroops) && (req.method === 'POST')) {
      let troop = this.returnNewTroop();
      response = utilities.sendResponse(troop, 200);
    } else {
      return next.handle(req);
    }
    return response;
  }

  returnNewTroop(): Troop {
    let troops: Troop[];
    troops = JSON.parse(localStorage.getItem('troops'));
    if (troops.length === 0) {
      return new Troop(1);
    } else {
      return new Troop(troops[troops.length - 1].id + 1);
    }
  }
}
