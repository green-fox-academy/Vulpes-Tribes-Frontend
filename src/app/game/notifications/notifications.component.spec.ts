import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsComponent } from './notifications.component';
import { AppComponent } from '../../app.component';
import { LoginComponent } from '../../login/login.component';
import { LogoutComponent } from '../../logout/logout.component';
import { RegisterComponent } from '../../register/register.component';
import { KingdomSettingsComponent } from '../../kingdom-settings/kingdom-settings.component';
import { HeaderComponent } from '../../header/header.component';
import { GameComponent } from '../game.component';
import { ResourcesComponent } from '../resources/resources.component';
import { AlertComponent } from '../../alert/alert.component';
import { BuildingsComponent } from '../buildings/buildings.component';
import { BuildingDetailComponent } from '../buildings/building-details/building-detail.component';
import { BuildingComponent } from '../buildings/building/building.component';
import { WelcomeScreenComponent } from '../../welcome-screen/welcome-screen.component';
import { NotificationComponent } from './notification/notification.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsResponseMock } from '../../_helpers/mocks/notificationResponse.mock';
import { TribesNotification } from '../../_models/notification.model';
import { TroopsComponent } from '../troops/troops.component';
import {NotificationsService} from '../../services/notifications.service';
import {ResourcesService} from '../resources/resources.service';
import {of} from 'rxjs';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;
  let service: NotificationsService;
  let mockNotificationsComponent: NotificationsResponseMock;
  let mockNotifications: TribesNotification[];

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GameComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        LogoutComponent,
        KingdomSettingsComponent,
        HeaderComponent,
        ResourcesComponent,
        AlertComponent,
        BuildingsComponent,
        BuildingDetailComponent,
        BuildingComponent,
        WelcomeScreenComponent,
        NotificationsComponent,
        NotificationComponent,
        TroopsComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientTestingModule,
        HttpClientModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(NotificationsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    component.notifications = mockNotifications;
    expect(component).toBeTruthy();
  });

  it('should render Construction log in notifications__header class element', () => {
    component.notifications = mockNotifications;
    const element = document.querySelector('p');
    expect(element.innerText).toEqual('Construction log:');
  });

  it('Third mock notification should have title "My Kingdom"', () => {
    component.ngOnInit();
    component.notifications = service.getNotifications();
    expect(component.notifications[2].title).toEqual('My Kingdom');
  });
});
