import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
    this.http.post<any>('/login', user)
      .subscribe(
        response => {
          this.saveToken(response.tribes_token);
        }
      );
  }

  saveToken(tokenValue: number) {
    localStorage.setItem('token', tokenValue.toString());
  }

  isLoggedIn() {
    return (localStorage.getItem('token') !== null);
  }
}
