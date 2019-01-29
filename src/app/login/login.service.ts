import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { ENDPOINTS } from '../../environments/endpoints';

const url = environment.serverApi + ENDPOINTS.login;

@Injectable({
  providedIn: 'root',
})

export class LoginService {

  constructor(private http: HttpClient,
              private router: Router,
              private alert: AlertService) {
  }

  login(user) {
    this.http.post<any>(url, user, { reportProgress: true })
      .subscribe(
        (response) => {
          console.log(response);
          this.saveToken(response.tribes_token);
          this.router.navigate([`/game`]);
        },
        (error) => {
          this.alert.error(`No such user ${ user.username }!`);
        },
      );
  }

  saveToken(tokenValue: number) {
    localStorage.setItem(environment.tribes_token, tokenValue.toString());
  }
}
