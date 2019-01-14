import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResourcesComponent} from './resources.component';
import {AppComponent} from '../../app.component';
import {LoginComponent} from '../../login/login.component';
import {LogoutComponent} from '../../logout/logout.component';
import {RegisterComponent} from '../../register/register.component';
import {HeaderComponent} from '../../header/header.component';
import {GameComponent} from '../game.component';
import {AlertComponent} from '../../alert/alert.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app.routes';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BuildingsComponent} from '../buildings/buildings.component';
import {BuildingComponent} from '../buildings/building/building.component';
import {BuildingDetailComponent} from '../buildings/building-details/building-detail.component';
import {KingdomSettingsComponent} from '../../kingdom-settings/kingdom-settings.component';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        HeaderComponent,
        GameComponent,
        ResourcesComponent,
        KingdomSettingsComponent,
        AlertComponent,
        BuildingsComponent,
        BuildingComponent,
        BuildingDetailComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
