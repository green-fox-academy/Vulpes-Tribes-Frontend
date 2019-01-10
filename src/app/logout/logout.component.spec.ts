import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { AppComponent} from '../app.component';
import { LoginComponent} from '../login/login.component';
import { RegisterComponent} from '../register/register.component';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule} from '../app.routes';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CustomHeaders} from '../_models/head.model';
import { APP_BASE_HREF} from '@angular/common';
import { HeaderComponent} from '../header/header.component';
import { GameComponent} from '../game/game.component';
import { ResourcesComponent} from '../game/resources/resources.component';
import { SettingsComponent} from '../game/settings/settings.component';
import { AlertComponent} from '../alert/alert.component';
import { BuildingsComponent} from '../game/buildings/buildings.component';
import { BuildingDetailComponent} from '../game/buildings/building-details/building-detail.component';
import { BuildingComponent} from '../game/buildings/building/building.component';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

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
        ReactiveFormsModule,
        HttpClientModule,
      ],
      providers: [
        CustomHeaders,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
