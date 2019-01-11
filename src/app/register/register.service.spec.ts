import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from './register.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.routes';
import {FormsModule} from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {LogoutComponent} from '../logout/logout.component';

import {LoginInterceptor} from '../_helpers/interceptors/login.interceptor';
import {GameComponent} from '../game/game.component';
import {HeaderComponent} from '../header/header.component';
import {ResourcesComponent} from '../game/resources/resources.component';
import {SettingsComponent} from '../game/settings/settings.component';
import {AlertComponent} from '../alert/alert.component';

import {RouterTestingModule} from '@angular/router/testing';
import {BuildingsComponent} from '../game/buildings/buildings.component';
import {BuildingDetailComponent} from '../game/buildings/building-details/building-detail.component';
import {BuildingComponent} from '../game/buildings/building/building.component';


describe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      LoginComponent,
      LogoutComponent,
      RegisterComponent,
      HeaderComponent,
      GameComponent,
      ResourcesComponent,
      SettingsComponent,
      AlertComponent,
      BuildingsComponent,
      BuildingDetailComponent,
      BuildingComponent
    ],
    imports: [
      RouterTestingModule.withRoutes([]),
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [
      RegisterService,
      {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true},
    ]
  }));

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });


});
