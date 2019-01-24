import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse,
  HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Kingdom } from '../../_models/kingdom.model';
import { LoaderService } from 'src/app/services/loader.service';

const kingdom: Kingdom = {
  'id': 213,
  'name': 'My Kingdom',
  'userId': 22,
  'buildings': [
    {
      'id': 123,
      'type': 'townhall',
      'level': 1,
      'hp': 100,
      'startedAt': 1231232312,
      'finishedAt': 7652146122
    }
  ],
  'resources': [
    {
      'type': 'food',
      'amount': 223,
      'generation': 0
    }
  ],
  'troops': [
    {
      'id': 123,
      'level': 1,
      'hp': 100,
      'attack': 50,
      'defence': 20,
      'startedAt': 1231232312,
      'finishedAt': 7652146122
    }
  ],
  'location': {
    'x': 12,
    'y': 24
}
};


@Injectable()
export class KingdomInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) { }
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    this.showLoader();
      if (req.url.endsWith('/kingdom') && (req.method === 'GET')) {
          return new Observable(observer => {
            observer.next(new HttpResponse<Kingdom>(
              {
                  body: kingdom,
                  status: 200,
              }));
            observer.complete();
            setTimeout(() => console.log( 'loading'), 2000 )
            this.hideLoader();
          });
        }
        else if (req.url.endsWith('/kingdom') && (req.method === 'PUT')) {
          return new Observable(observer => {
            observer.next(new HttpResponse<any>(
              {
                body: kingdom,
                status: 200,
              }));
              observer.complete();
          }); 
        }
  }

}