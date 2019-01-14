import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { GameComponent } from './game.component';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {LogoutComponent} from '../logout/logout.component';
import {RegisterComponent} from '../register/register.component';
import {HeaderComponent} from '../header/header.component';
import {ResourcesComponent} from './resources/resources.component';
import {AlertComponent} from '../alert/alert.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app.routes';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {BuildingsComponent} from './buildings/buildings.component';
import {BuildingComponent} from './buildings/building/building.component';
import {BuildingDetailComponent} from './buildings/building-details/building-detail.component';
import {ModalService} from './buildings/building-details/modal.service';
import {DomService} from './buildings/building-details/domService';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {BuildingsService} from './buildings/buildings.service';
import {BuildingResponseMock} from '../_helpers/mocks/buildingResponse.mock';
import {of} from 'rxjs';
import {KingdomSettingsComponent} from '../kingdom-settings/kingdom-settings.component';



describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let buildingsComponent: BuildingsComponent;
  let buildingsService: BuildingsService;
  let buildingsMock = BuildingResponseMock;

  beforeEach(() => {
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
        BuildingDetailComponent
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
        ModalService,
        DomService,
        BuildingsService,
        BuildingsComponent,
        BuildingResponseMock
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    buildingsComponent = TestBed.get(BuildingsComponent);
    buildingsService = TestBed.get(BuildingsService);
    buildingsMock = TestBed.get(BuildingResponseMock);
    spyOn(buildingsService, 'getBuildings').and.returnValue(of(buildingsMock));
    console.log(buildingsComponent.buildings);
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component);
    expect(component).toBeTruthy();
  });
});
