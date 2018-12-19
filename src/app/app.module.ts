import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule} from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryDbService} from 'angular-in-memory-web-api';
import { InMemoryUsersService} from './_helpers/InMemoryUsersService';
import { HttpModule} from '@angular/http';
import { MockBackend} from './_helpers/mock_backend.interceptor';
import { LogoutComponent } from './logout/logout.component';
import {CustomHeaders} from './_models/head.model';
import {APP_BASE_HREF} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router/src/router_module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
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
    InMemoryUsersService,
    {provide: HTTP_INTERCEPTORS, useClass: MockBackend, multi: true},
    MockBackend,
    CustomHeaders,
    {provide: APP_BASE_HREF, useValue : '/' }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
