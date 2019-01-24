import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ENDPOINTS } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate([ENDPOINTS.login]);
      return false;
    }
    return true;
  }
}
