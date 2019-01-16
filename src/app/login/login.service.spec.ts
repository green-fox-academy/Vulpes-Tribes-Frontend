import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app.routes';
import { FormsModule } from '@angular/forms';
import { LoginInterceptor } from '../_helpers/interceptors/login.interceptor';

import { AppComponent } from '../app.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from '../logout/logout.component';
import { RegisterComponent } from '../register/register.component';
import { HeaderComponent } from '../header/header.component';
import { GameComponent } from '../game/game.component';
import { ResourcesComponent } from '../game/resources/resources.component';
import { AlertComponent } from '../alert/alert.component';

import { BuildingsComponent } from '../game/buildings/buildings.component';
import { BuildingDetailComponent } from '../game/buildings/building-details/building-detail.component';
import { BuildingComponent } from '../game/buildings/building/building.component';
import { KingdomSettingsComponent } from '../kingdom-settings/kingdom-settings.component';
import { WelcomeScreenComponent } from '../welcome-screen/welcome-screen.component';
import { mockLocalStorage, store } from '../_utilities/authTesting.utilities';

describe('LoginService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let loginService: LoginService;
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  const mockStore = store;
  const mockStorage = mockLocalStorage;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        HeaderComponent,
        GameComponent,
        ResourcesComponent,
        KingdomSettingsComponent,
        AlertComponent,
        BuildingComponent,
        BuildingsComponent,
        BuildingDetailComponent,
        WelcomeScreenComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientTestingModule,
        HttpClientModule,
      ],
      providers: [
        LoginService,
        { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
      ],
    });

    spyOn(localStorage, 'getItem')
      .and.callFake(mockStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockStorage.clear);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    loginService = TestBed.get(LoginService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('login', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      loginService = TestBed.get(LoginService);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should send POST request to mock backend', () => {
      httpTestingController = TestBed.get(HttpTestingController);
      httpClient = TestBed.get(HttpClient);
      const user = {
        username: 'Honza',
        password: '123',
      };
      loginService.login(user);
      const req = httpClient.post(environment.login, user);
      expect(req).toBeTruthy();
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
  });
});
