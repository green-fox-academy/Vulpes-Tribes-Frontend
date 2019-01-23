import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root',
})

export class LoginService {

  constructor(private http: HttpClient,
              private router: Router,
              private alert: AlertService) {
  }

  login(user) {
    this.http.post<any>(environment.login, user, { reportProgress: true })
      .subscribe(
<<<<<<< HEAD
        response => {
          console.log(response);
=======
        (response) => {
>>>>>>> 17f90ece5b40c323caf080b179a30b6c1f68c34d
          this.saveToken(response.tribes_token);
          this.router.navigate(['/game']);
        },
        (error) => {
          this.alert.error(`No such user ${user.username}!`);
        },
      );
  }

  saveToken(tokenValue: number) {
    localStorage.setItem(environment.tribes_token, tokenValue.toString());
  }
}
