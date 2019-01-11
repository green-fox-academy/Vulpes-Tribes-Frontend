import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import {AppComponent} from '../../app.component';
import {LoginComponent} from '../../login/login.component';
import {LogoutComponent} from '../../logout/logout.component';
import {RegisterComponent} from '../../register/register.component';
import {HeaderComponent} from '../../header/header.component';
import {GameComponent} from '../game.component';
import {ResourcesComponent} from '../resources/resources.component';
import {AlertComponent} from '../../alert/alert.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app.routes';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {APP_BASE_HREF} from '@angular/common';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

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
        AlertComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
