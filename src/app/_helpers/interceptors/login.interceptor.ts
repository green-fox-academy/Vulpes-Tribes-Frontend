import {
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpUserEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../../_models/user.model';
import { InterceptorUtilities } from '../../_utilities/interceptor.utilities';

const users: User[] = [
  { userId: 1, username: 'Honza', kingdomId: 1, kingdomName: 'Honza\'s kingdom', password: '12345' },
  { userId: 2, username: 'Karel', kingdomId: 1, kingdomName: 'Karel\'s kingdom', password: '12345' },
];

const utilities = new InterceptorUtilities();

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any> | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    if (req.url.endsWith('/login') &&
      (req.method === 'POST') &&
      (req.body.username.length > 0 &&
        req.body.password.length > 0)) {
      if (this.checkUser(req.body.username, req.body.password)) {
        console.log('test passed');
        return utilities.sendResponse({
          id: 1,
          tribes_token: this.generateToken(),
        },                            200);

      }
      return throwError({ error: { message: 'No such user ' + req.body.username + '!' } });

    }  if (req.url.endsWith('/register')) {
      users.push(new User(req.body.username, (users.length + 1), req.body.password, req.body.kingdom, users.length + 100));
      return utilities.sendResponse({
        id: users[users.length - 1].userId,
        username: users[users.length - 1].username,
        kingdom_id: users[users.length - 1].kingdomId,
        avatar: 'http://avatar.loc/my.png',
        points: 0,
        tribes_token: this.generateToken(),
      },                            200);
    }  if (req.url.endsWith('/logout')) {
      return utilities.sendResponse({
        status: 'ok',
        message: 'Logged out successfully!',
      },                            200);
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
}
