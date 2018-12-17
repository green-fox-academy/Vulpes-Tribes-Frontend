import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { }

  logout() {
    this.http.delete<any>('/logout').subscribe(
      response => {
        localStorage.clear();
        alert(response.message);
      });
  }
}
