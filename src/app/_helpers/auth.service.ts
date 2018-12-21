import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  redirectUrl: string;

  isLoggedIn(): boolean {
    return (localStorage.getItem(environment.tribes_token) !== null);
  }

}
