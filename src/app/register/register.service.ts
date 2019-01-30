import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { ENDPOINTS } from '../../environments/endpoints';
import { environment } from '../../environments/environment';

const URL = environment.serverApi + ENDPOINTS.register;

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
    this.http.post<any>(URL, user)
      .subscribe(
        (response) => {
          this.router.navigate(['/login']);
        },
      );
  }
}
