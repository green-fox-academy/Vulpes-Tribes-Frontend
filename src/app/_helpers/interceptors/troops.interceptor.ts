import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { troops } from '../mocks/mock-troops';
import { ENDPOINTS } from 'src/environments/endpoints';
import { Troop } from 'src/app/_models/troop.model';

@Injectable()
export class TroopsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith(ENDPOINTS.getTroops) && (req.method === 'GET')) {
      return new Observable(observer => observer.next(new HttpResponse<any>({
        body: {
          troops,
        },
        status: 200,
      })));
    } else if (req.url.endsWith(ENDPOINTS.getTroops) && (req.method === 'POST')) {
      let troop = this.returnNewTroop();
      return new Observable(observer => observer.next(new HttpResponse<any>({
        body: {
          troop,
        },
        status: 200,
      })));
    }
    return next.handle(req);
  }

  returnNewTroop(): Troop {
    let troops: Troop[];
    troops = JSON.parse(localStorage.getItem('troops'));
    if (troops === []) return new Troop(1);
    else {
    troops.sort(function(a, b) {
      return a.id - b.id;
    });
    return new Troop(troops[troops.length - 1].id + 1);
    }
  }
}
