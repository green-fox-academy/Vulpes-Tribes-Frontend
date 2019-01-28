import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { RegisterComponent } from '../register/register.component';
import { GameComponent } from '../game/game.component';
import { ResourcesComponent } from '../game/resources/resources.component';
import { AlertComponent } from '../alert/alert.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { BuildingsComponent } from '../game/buildings/buildings.component';
import { BuildingComponent } from '../game/buildings/building/building.component';
import { BuildingDetailComponent } from '../game/buildings/building-details/building-detail.component';
import { KingdomSettingsComponent } from '../kingdom-settings/kingdom-settings.component';
import { WelcomeScreenComponent } from '../welcome-screen/welcome-screen.component';
import {NotificationsComponent} from '../game/notifications/notifications.component';
import {NotificationComponent} from '../game/notifications/notification/notification.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        LogoutComponent,
        KingdomSettingsComponent,
        HeaderComponent,
        GameComponent,
        ResourcesComponent,
        AlertComponent,
        BuildingsComponent,
        BuildingDetailComponent,
        BuildingComponent,
        WelcomeScreenComponent,
        NotificationsComponent,
        NotificationComponent,
      ],

      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
