import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsComponent } from './buildings.component';
import { BuildingComponent } from './building/building.component';
import { BuildingDetailComponent } from './building-details/building-detail.component';
import { ModalService } from './building-details/modal.service';
import { DomService } from './building-details/domService';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app.routes';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../../app.component';
import { LoginComponent } from '../../login/login.component';
import { LogoutComponent } from '../../logout/logout.component';
import { RegisterComponent } from '../../register/register.component';
import { HeaderComponent } from '../../header/header.component';
import { GameComponent } from '../game.component';
import { ResourcesComponent } from '../resources/resources.component';
import { AlertComponent } from '../../alert/alert.component';
import { BuildingsService } from './buildings.service';
import { Observable, of } from 'rxjs';
import { Building } from '../../_models/building.model';
import { BuildingResponseMock } from '../../_helpers/mocks/buildingResponse.mock';
import { KingdomSettingsComponent } from '../../kingdom-settings/kingdom-settings.component';
import { WelcomeScreenComponent } from '../../welcome-screen/welcome-screen.component';
import {NotificationsComponent} from '../notifications/notifications.component';
import {NotificationComponent} from '../notifications/notification/notification.component';

describe('BuildingsComponent', () => {
  let component: BuildingsComponent;
  let fixture: ComponentFixture<BuildingsComponent>;
  let service: BuildingsService;
  let buildingsMock = BuildingResponseMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingsComponent, BuildingComponent],
      imports: [
        BrowserModule,
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
      ],
      providers: [
        ModalService,
        BuildingResponseMock,
        DomService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BuildingsService);
    buildingsMock = TestBed.get(BuildingResponseMock);
    spyOn(service, 'getBuildingsFromBackend').and.returnValue(of(buildingsMock));
    fixture.detectChanges();
  });

  it('should create the Buildings component', () => {
    expect(component).toBeTruthy();
  });

  it('getBackendBuildings method on initialization', () => {
    expect(service.getBuildingsFromBackend).toHaveBeenCalled();

  });
});
