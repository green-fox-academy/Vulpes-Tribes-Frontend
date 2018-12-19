import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';
import { CustomHeaders} from '../_models/head.model';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient,
              private router: Router,
              private headers: CustomHeaders) { }

  logout() {
    this.http.delete<any>('/logout', this.headers).subscribe(
      response => {
        localStorage.removeItem(environment.tribes_token);
        this.router.navigate(['/']);
        alert(response.message);
      });
  }
}
