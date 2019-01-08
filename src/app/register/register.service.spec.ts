import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from './register.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryUsersService} from '../_helpers/InMemoryUsersService';
import {LoginService} from '../login/login.service';
import {LogoutComponent} from '../logout/logout.component';
import {APP_BASE_HREF} from '@angular/common';
import {LoginInterceptor} from '../_helpers/login.interceptor';

describe('RegisterService', () => {
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
      RegisterService,
      {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true},
    ]
  }));

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });


});
