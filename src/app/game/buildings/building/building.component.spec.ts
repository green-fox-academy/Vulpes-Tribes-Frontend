import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingComponent } from './building.component';
import { BuildingsComponent } from '../buildings.component';
import { BuildingDetailComponent } from '../building-details/building-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../../app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalService } from '../building-details/modal.service';
import { DomService } from '../building-details/domService';
import { AppComponent } from '../../../app.component';
import { LoginComponent } from '../../../login/login.component';
import { LogoutComponent } from '../../../logout/logout.component';
import { RegisterComponent } from '../../../register/register.component';
import { HeaderComponent } from '../../../header/header.component';
import { GameComponent } from '../../game.component';
import { ResourcesComponent } from '../../resources/resources.component';
import { AlertComponent } from '../../../alert/alert.component';
import { Building } from '../../../_models/building.model';
import { BuildingFactory } from '../../../_helpers/factories/building.factory';
import { KingdomSettingsComponent } from '../../../kingdom-settings/kingdom-settings.component';
import { WelcomeScreenComponent } from '../../../welcome-screen/welcome-screen.component';

describe('BuildingComponent', () => {
  let component: BuildingComponent;
  let fixture: ComponentFixture<BuildingComponent>;
  let building: Building;

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
        KingdomSettingsComponent,
        AlertComponent,
        BuildingsComponent,
        BuildingComponent,
        BuildingDetailComponent,
        WelcomeScreenComponent,
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
      ],
      providers: [
        ModalService,
        DomService,
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
