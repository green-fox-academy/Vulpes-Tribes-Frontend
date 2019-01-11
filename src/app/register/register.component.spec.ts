import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryUsersService} from '../_helpers/InMemoryUsersService';
import {LogoutComponent} from '../logout/logout.component';
import {APP_BASE_HREF} from '@angular/common';
<<<<<<< HEAD
import {GameComponent} from '../game/game.component';
import {HeaderComponent} from '../header/header.component';
import {ResourcesComponent} from '../game/resources/resources.component';
import {SettingsComponent} from '../game/settings/settings.component';
import {AlertComponent} from '../alert/alert.component';
import {RouterTestingModule} from '@angular/router/testing';
=======
import {HeaderComponent} from '../header/header.component';
import {GameComponent} from '../game/game.component';
import {ResourcesComponent} from '../game/resources/resources.component';
import {SettingsComponent} from '../game/settings/settings.component';
import {AlertComponent} from '../alert/alert.component';
import {BuildingsComponent} from '../game/buildings/buildings.component';
import {BuildingDetailComponent} from '../game/buildings/building-details/building-detail.component';
import {BuildingComponent} from '../game/buildings/building/building.component';
>>>>>>> buildings-HonzaDudek

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

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
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        HttpClientInMemoryWebApiModule.forRoot(InMemoryUsersService)
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
