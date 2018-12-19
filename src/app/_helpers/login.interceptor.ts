import {
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpUserEvent
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any> | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    if (req.url.endsWith('/login') &&
       (req.method === 'POST') &&
       (req.body.username.length > 0 &&
        req.body.password.length > 0)) {
      console.log('Intercepted', req);
      return new Observable(observer => {
        observer.next(new HttpResponse<any>(
          {
            body:
              {
                id: 1,
                tribes_token: this.generateToken()
              },
            status: 200
          }
        ));
        observer.complete();
      });
    } else if (req.url.endsWith('/register')) {
      return new Observable(
        observer => {
          observer.next(new HttpResponse<any>(
            {
              body: {
                id: 123,
                username: 'adam',
                kingdom_id: 222,
                avatar: 'http://avatar.loc/my.png',
                points: 0
              }
            }
          ));
          observer.complete();
        });
    } else if (req.url.endsWith('/logout')) {
      return new Observable(
        observer => {
          observer.next(new HttpResponse<any>(
            {
              body: {
                status: 'ok',
                message: 'Logged out successfully!'
              }
            }
          ));
          observer.complete();
        });
    }
    return next.handle(req);
  }

  generateToken(): string {
    let token = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }

}
