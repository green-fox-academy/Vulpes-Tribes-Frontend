import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(user) {
    this.http.post<any>(environment.login, user, {reportProgress: true})
      .subscribe(
        response => {
          this.saveToken(response.tribes_token);
          this.router.navigate(['/game']);
        }
      );
  }

  saveToken(tokenValue: number) {
    localStorage.setItem(environment.tribes_token, tokenValue.toString());
  }

  isLoggedIn(): boolean {
    console.log(localStorage.getItem(environment.tribes_token) !== null);
    return (localStorage.getItem(environment.tribes_token) !== null);
  }
}
