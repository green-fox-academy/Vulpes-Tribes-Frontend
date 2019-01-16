import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Troops} from '../_helpers/mock-troops';

@Injectable()
export class TroopsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const troops = Troops;
    if (req.url.endsWith('/game/troops') && (req.method === 'GET')) {
      return new Observable(observer => observer.next(new HttpResponse<any>({
        body: {
          troops,
        },
        status: 200,
      })));
    }
    return next.handle(req);
  }
}
