import {TestBed} from '@angular/core/testing';

import {LoginService} from './login.service';
import {AppComponent} from '../app.component';
import {LoginComponent} from './login.component';
import {RegisterComponent} from '../register/register.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryUsersService} from '../_helpers/InMemoryUsersService';
import {LogoutComponent} from '../logout/logout.component';

describe('LoginService', () => {
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
      LoginService,
    ]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
