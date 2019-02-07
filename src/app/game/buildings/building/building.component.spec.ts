import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingComponent } from './building.component';
import { BuildingsComponent } from '../buildings.component';
import { BuildingDetailComponent } from '../building-details/building-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../../app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../../../app.component';
import { LoginComponent } from '../../../login/login.component';
import { RegisterComponent } from '../../../register/register.component';
import { HeaderComponent } from '../../../header/header.component';
import { GameComponent } from '../../game.component';
import { ResourcesComponent } from '../../resources/resources.component';
import { AlertComponent } from '../../../alert/alert.component';
import { Building } from '../../../_models/building.model';
import { BuildingFactory } from '../../../_helpers/factories/building.factory';
import { KingdomSettingsComponent } from '../../../kingdom-settings/kingdom-settings.component';
import { WelcomeScreenComponent } from '../../../welcome-screen/welcome-screen.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {NotificationComponent} from '../../notifications/notification/notification.component';

describe('BuildingComponent', () => {
  let component: BuildingComponent;
  let fixture: ComponentFixture<BuildingComponent>;
  let building: Building;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
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
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
      ],
      providers: [
        BuildingFactory,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingComponent);
    component = fixture.componentInstance;
    building = new BuildingFactory().createBuilding(1, 'mine');
    component.building = building;
    fixture.detectChanges();
  });

  it('should create Building component', () => {
    expect(component).toBeTruthy();
  });

  it('Building should have id 1', () => {
    expect(component.building.id).toBe(1);
  });
});
