import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LogoutService } from './logout.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HeaderComponent } from '../header/header.component';
import { GameComponent } from '../game/game.component';
import { ResourcesComponent } from '../game/resources/resources.component';
import { KingdomSettingsComponent } from '../kingdom-settings/kingdom-settings.component';
import { AlertComponent } from '../alert/alert.component';
import { BuildingsComponent } from '../game/buildings/buildings.component';
import { BuildingComponent } from '../game/buildings/building/building.component';
import { WelcomeScreenComponent } from '../welcome-screen/welcome-screen.component';
import { BuildingDetailComponent } from '../game/buildings/building-details/building-detail.component'; // tslint:disable-line
import { CustomHeaders } from '../_models/head.model';
import { LoginInterceptor } from '../_helpers/interceptors/login.interceptor';
import { RouterTestingModule } from '@angular/router/testing';
import { mockLocalStorage, store } from '../_utilities/authTesting.utilities';
import { ENDPOINTS } from '../../environments/endpoints';
import {NotificationsComponent} from '../game/notifications/notifications.component';
import {NotificationComponent} from '../game/notifications/notification/notification.component';

class mockRouter {
  navigate(path) {}
}

describe('LogoutService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let logoutService: LogoutService;
  let router: Router;
  const mockStore = store;
  const mockStorage = mockLocalStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        LogoutComponent,
        KingdomSettingsComponent,
        HeaderComponent,
        GameComponent,
        ResourcesComponent,
        AlertComponent,
        BuildingsComponent,
        BuildingDetailComponent,
        BuildingComponent,
        WelcomeScreenComponent,
        NotificationsComponent,
        NotificationComponent,
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
        LogoutService,
        { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
        CustomHeaders,
      ],
    });

    httpClient = TestBed.get(HttpClient);
    logoutService = TestBed.get(LogoutService);
    router = TestBed.get(Router);
    httpTestingController = TestBed.get(HttpTestingController);

    spyOn(localStorage, 'getItem')
      .and.callFake(mockStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockStorage.clear);

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('logout', () => {

    it('should send DELETE request to mock backend', () => {
      httpTestingController = TestBed.get(HttpTestingController);
      httpClient = TestBed.get(HttpClient);

      logoutService.logout();
      const req = httpClient.delete(ENDPOINTS.logout);
      expect(req).toBeTruthy();
    });
  });

  it('should call navigate method after the logout method is called', () => {
    spyOn(router, 'navigate');
    logoutService.logout();
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should navigate to /login route after the logout method is called', () => {
    spyOn(router, 'navigate');
    logoutService.logout();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
