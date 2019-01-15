import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  @ViewChild('registerFormElement') registerForm;

  constructor(private http: HttpClient,
              private router: Router,
              private login: LoginService) {
  }

  createUser(user) {
    this.http.post<any>(environment.register, user)
      .subscribe(
        (response) => {
          this.login.saveToken(response.tribes_token);
          this.router.navigate(['/game']);
        },
      );
  }
}
