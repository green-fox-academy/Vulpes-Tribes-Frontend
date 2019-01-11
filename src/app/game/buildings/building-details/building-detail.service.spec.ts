import { TestBed } from '@angular/core/testing';

import { BuildingDetailService } from './building-detail.service';
import {BuildingsComponent} from '../buildings.component';
import {BuildingComponent} from '../building/building.component';
import {BuildingDetailComponent} from './building-detail.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../../app.routes';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ModalService} from './modal.service';
import {DomService} from './domService';
import {AppComponent} from '../../../app.component';
import {LoginComponent} from '../../../login/login.component';
import {LogoutComponent} from '../../../logout/logout.component';
import {RegisterComponent} from '../../../register/register.component';
import {HeaderComponent} from '../../../header/header.component';
import {GameComponent} from '../../game.component';
import {ResourcesComponent} from '../../resources/resources.component';
import {SettingsComponent} from '../../settings/settings.component';
import {AlertComponent} from '../../../alert/alert.component';

describe('BuildingDetailService', () => {
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
    const service: BuildingDetailService = TestBed.get(BuildingDetailService);
    expect(service).toBeTruthy();
  });
});
