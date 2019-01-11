import {async, ComponentFixture, TestBed} from '@angular/core/testing';


import { GameComponent } from './game.component';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {LogoutComponent} from '../logout/logout.component';
import {RegisterComponent} from '../register/register.component';
import {HeaderComponent} from '../header/header.component';
import {ResourcesComponent} from './resources/resources.component';
import {SettingsComponent} from './settings/settings.component';
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
import {BuildingFactory} from '../_helpers/factories/building.factory';



describe('GameComponent', () => {
  let component: GameComponent;
  let buildingsComponent: BuildingsComponent;
  let fixture: ComponentFixture<GameComponent>;

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
        DomService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    buildingsComponent.buildings = [
      new BuildingFactory().createBuildingComponent(123, 'mine'),
      new BuildingFactory().createBuildingComponent(124, 'academy')

    ];
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
