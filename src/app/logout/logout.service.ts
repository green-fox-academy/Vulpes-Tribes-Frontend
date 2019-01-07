import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CustomHeaders} from '../_models/head.model';
import {Router} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LogoutService {



  constructor(private http: HttpClient,
              private router: Router,
              private headers: CustomHeaders) {
  }

  logout() {
    this.http.delete<any>('/logout', httpOptions).subscribe(
      response => {
        localStorage.removeItem(environment.tribes_token);
        this.router.navigate(['/login']);
        alert(response.message);
      });
  }
}
