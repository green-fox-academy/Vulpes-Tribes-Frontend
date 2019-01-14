import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(user) {
    this.http.post<any>(environment.login, user, {reportProgress: true})
      .pipe(
        delay(5000)
      )
      .subscribe(
        response => {
          this.saveToken(response.tribes_token);
        }
      );
  }

  saveToken(tokenValue: number) {
    localStorage.setItem(environment.tribes_token, tokenValue.toString());
  }

  isLoggedIn() {
    return (localStorage.getItem(environment.tribes_token) !== null);
  }
}
