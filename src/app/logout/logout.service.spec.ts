import { TestBed } from '@angular/core/testing';

import { LogoutService } from './logout.service';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryUsersService} from '../_helpers/InMemoryUsersService';
import {LoginService} from '../login/login.service';
import {RegisterService} from '../register/register.service';
import {CustomHeaders} from '../_models/head.model';
import {LogoutComponent} from './logout.component';
import {APP_BASE_HREF} from '@angular/common';

describe('LogoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      LoginComponent,
      LogoutComponent,
      RegisterComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryUsersService)
    ],
    providers: [
      CustomHeaders,
      { provide: APP_BASE_HREF, useValue : '/' }
    ]
  }));

  it('should be created', () => {
    const service: LogoutService = TestBed.get(LogoutService);
    expect(service).toBeTruthy();
  });
});
