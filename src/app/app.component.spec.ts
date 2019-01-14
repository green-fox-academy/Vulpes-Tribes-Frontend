import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routes';
import {FormsModule} from '@angular/forms';
import {LogoutComponent} from './logout/logout.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CustomHeaders} from './_models/head.model';
import {APP_BASE_HREF} from '@angular/common';
import {GameComponent} from './game/game.component';
import {HeaderComponent} from './header/header.component';
import {ResourcesComponent} from './game/resources/resources.component';
import {SettingsComponent} from './game/settings/settings.component';
import {AlertComponent} from './alert/alert.component';
import {BuildingsComponent} from './game/buildings/buildings.component';
import {BuildingDetailComponent} from './game/buildings/building-details/building-detail.component';
import {BuildingComponent} from './game/buildings/building/building.component';

describe('AppComponent', () => {
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
        AlertComponent,
        BuildingsComponent,
        BuildingDetailComponent,
        BuildingComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [
        CustomHeaders,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Vulpes|Tribes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Vulpes|Tribes');
  });
});
