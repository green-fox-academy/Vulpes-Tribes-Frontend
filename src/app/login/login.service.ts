import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(user) {
    this.http.post<any>(environment.login, user)
      .subscribe(
        response => {
          console.log(response.tribes_token);
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
