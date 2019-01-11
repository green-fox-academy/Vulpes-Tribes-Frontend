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
import {Observable, throwError} from 'rxjs';
import {User} from '../../_models/user.model';


const users: User[] = [
  {userId: 1, username: 'Honza', kingdomId: 1, kingdomName: 'Honza\'s kingdom', password: '12345'},
  {userId: 2, username: 'Karel', kingdomId: 1, kingdomName: 'Karel\'s kingdom', password: '12345'}
];

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any> | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    if (req.url.endsWith('/login') &&
      (req.method === 'POST') &&
      (req.body.username.length > 0 &&
        req.body.password.length > 0)) {
      if (this.checkUser(req.body.username, req.body.password)) {
        return this.sendResponse({
          id: 1,
          tribes_token: this.generateToken()

        }, 200);
      } else {
        return throwError({error: {message: 'No such user ' + req.body.username + '!'}});
      }
    } else if (req.url.endsWith('/register')) {
      users.push(new User(req.body.username, (users.length + 1), req.body.password, req.body.kingdom, users.length + 100));
      return this.sendResponse({
        id: users[users.length - 1].userId,
        username: users[users.length - 1].username,
        kingdom_id: users[users.length - 1].kingdomId,
        avatar: 'http://avatar.loc/my.png',
        points: 0,
        tribes_token: this.generateToken()
      }, 200);
    } else if (req.url.endsWith('/logout')) {
      return this.sendResponse({
        status: 'ok',
        message: 'Logged out successfully!'
      }, 200);
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

  checkUser(username, password): boolean {
    for (const user of users) {
      if (user.username === username && user.password === password) {
        return true;
      }
    }
  }

  sendResponse(responseBody: {}, status: number): Observable<any> {
    return new Observable<any>(
      observer => {
        observer.next(new HttpResponse<any>(
          {
            body: {
              responseBody
            },
            status: status
          }
        ));
        observer.complete();
      });
  }
}
