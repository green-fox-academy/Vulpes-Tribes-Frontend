import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {troops} from '../mock-troops';

@Injectable()
export class TroopsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const troopList = troops;
    if (req.url.endsWith('/game/troops') && (req.method === 'GET')) {
      return new Observable(observer => observer.next(new HttpResponse<any>({
        body: {
          troopList,
        },
        status: 200,
      })));
    }
    return next.handle(req);
  }
}
