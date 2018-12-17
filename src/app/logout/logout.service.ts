import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { }

  logout() {
    this.http.delete<any>('/logout').subscribe(
      response => {
        localStorage.removeItem(environment.tribes_token);
        alert(response.message);
      });
  }
}
