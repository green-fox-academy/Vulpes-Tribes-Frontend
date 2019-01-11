import { TestBed } from '@angular/core/testing';

import { BuildingsService } from './buildings.service';
import {BuildingsComponent} from './buildings.component';
import {BuildingComponent} from './building/building.component';
import {BuildingDetailComponent} from './building-details/building-detail.component';
import {ModalService} from './building-details/modal.service';
import {DomService} from './building-details/domService';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app.routes';
import {FormsModule} from '@angular/forms';
import {AppComponent} from '../../app.component';
import {LoginComponent} from '../../login/login.component';
import {LogoutComponent} from '../../logout/logout.component';
import {RegisterComponent} from '../../register/register.component';
import {HeaderComponent} from '../../header/header.component';
import {GameComponent} from '../game.component';
import {ResourcesComponent} from '../resources/resources.component';
import {SettingsComponent} from '../settings/settings.component';
import {AlertComponent} from '../../alert/alert.component';

describe('BuildingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
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
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [
      ModalService,
      DomService
    ]
  }));

  it('should be created', () => {
    const service: BuildingsService = TestBed.get(BuildingsService);
    expect(service).toBeTruthy();
  });
});
