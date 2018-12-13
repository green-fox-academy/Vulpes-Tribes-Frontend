import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InMemoryTokenService } from '../_helpers/InMemoryTokenService';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private mock: InMemoryTokenService) { }

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
    return 1 //(localStorage.getItem('token').length > 0);
  }
}
