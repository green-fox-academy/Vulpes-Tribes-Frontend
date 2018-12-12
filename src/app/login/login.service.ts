import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InMemoryTokenService } from '../_helpers/InMemoryTokenService';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private token: InMemoryTokenService) { }

  login(user) {
    this.http.post('login', user);
    this.token.saveToken();
  }

  isLoggedIn() {
    return true;
  }
}
