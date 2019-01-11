import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {AppComponent} from '../app.component';
import {RegisterComponent} from '../register/register.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryUsersService} from '../_helpers/InMemoryUsersService';
import {LogoutComponent} from '../logout/logout.component';
import {APP_BASE_HREF} from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {GameComponent} from '../game/game.component';
import {ResourcesComponent} from '../game/resources/resources.component';
import {SettingsComponent} from '../game/settings/settings.component';
import {AlertComponent} from '../alert/alert.component';
<<<<<<< HEAD
import {RouterTestingModule} from '@angular/router/testing';
=======
import {BuildingsComponent} from '../game/buildings/buildings.component';
import {BuildingDetailComponent} from '../game/buildings/building-details/building-detail.component';
import {BuildingComponent} from '../game/buildings/building/building.component';
>>>>>>> buildings-HonzaDudek

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
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
<<<<<<< HEAD
        AlertComponent
=======
        AlertComponent,
        BuildingsComponent,
        BuildingDetailComponent,
        BuildingComponent
>>>>>>> buildings-HonzaDudek
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryUsersService)
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
