import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {LoginComponent} from '../login/login.component';
import {LoginService} from '../login/login.service';
import {HttpClient} from '@angular/common/http';
import {HttpTestingController} from '@angular/common/http/testing';

describe('AuthGuardService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [ AuthGuard, AuthService, LoginService ],
      imports:   [ RouterTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    loginService = TestBed.get(LoginService);

  });

  it('checks if a user is valid',



        expect(auth.canActivate()).toBeFalsy();
        expect(router.navigate).toHaveBeenCalled();
      })
    ));
});
