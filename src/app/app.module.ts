import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule} from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule, InMemoryDbService} from 'angular-in-memory-web-api';
import { InMemoryUsersService} from './_helpers/InMemoryUsersService';
import { HttpModule} from '@angular/http';
import {InMemoryTokenService} from './_helpers/InMemoryTokenService';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceInterceptor } from './_helpers/resources.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryUsersService)
  ],
  providers: [InMemoryTokenService, { provide: HTTP_INTERCEPTORS, useClass: ResourceInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
