import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user) {
    this.http.post<any>('/login', user)
      .subscribe(
        response => {
          console.log(response.tribes_token);
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
