import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

import {LoginService} from './login.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {environment} from '../../environments/environment';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.routes';
import {FormsModule} from '@angular/forms';
import {RegisterService} from '../register/register.service';
import {LoginInterceptor} from '../_helpers/login.interceptor';
import {AppComponent} from '../app.component';
import {LoginComponent} from './login.component';
import {LogoutComponent} from '../logout/logout.component';
import {RegisterComponent} from '../register/register.component';
import {HeaderComponent} from '../header/header.component';
import {GameComponent} from '../game/game.component';
import {ResourcesComponent} from '../game/resources/resources.component';
import {SettingsComponent} from '../game/settings/settings.component';
import {AlertComponent} from '../alert/alert.component';


describe('LoginService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        HeaderComponent,
        GameComponent,
        ResourcesComponent,
        SettingsComponent,
        AlertComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [
        LoginService,
        {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true},
      ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    loginService = TestBed.get(LoginService);


    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('login', () => {
    const user = {
      username: 'Honza',
      password: '123'
    };

    it('should send POST request to mock backend', () => {
      loginService.login(user);
      const req = httpTestingController.expectOne(environment.login);
      expect(req.request.method).toEqual('POST');
    });
  });

  describe('saveToken', () => {
    it('should store the token in localStorage',
      () => {
        loginService.saveToken(123456);
        expect(localStorage.getItem(environment.tribes_token)).toEqual('123456');
      });
  });

  describe('Checking credentials', () => {
    const user = {
      username: 'Honza',
      password: '123',
    };

    it('should redirect to game component upon successful login', () => {
      loginService.login(user);
    });
  });
});
