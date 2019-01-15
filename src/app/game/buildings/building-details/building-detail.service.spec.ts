import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDetailService } from './building-detail.service';
import { BuildingsComponent } from '../buildings.component';
import { BuildingComponent } from '../building/building.component';
import { BuildingDetailComponent } from './building-detail.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from '../../../app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalService } from './modal.service';
import { DomService } from './domService';
import { AppComponent } from '../../../app.component';
import { LoginComponent } from '../../../login/login.component';
import { LogoutComponent } from '../../../logout/logout.component';
import { RegisterComponent } from '../../../register/register.component';
import { HeaderComponent } from '../../../header/header.component';
import { GameComponent } from '../../game.component';
import { ResourcesComponent } from '../../resources/resources.component';
import { AlertComponent } from '../../../alert/alert.component';
import { KingdomSettingsComponent } from '../../../kingdom-settings/kingdom-settings.component';
import { WelcomeScreenComponent } from '../../../welcome-screen/welcome-screen.component';

describe('BuildingDetailService', () => {
  let service: BuildingDetailService;
  let fixture: ComponentFixture<BuildingDetailComponent>;
  let buildingDetailComponent: BuildingDetailComponent;

  beforeEach(async () => TestBed.configureTestingModule({
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
      WelcomeScreenComponent,
      BuildingDetailComponent,
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
    ],
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingDetailComponent);
    buildingDetailComponent = fixture.componentInstance;
    service = TestBed.get(BuildingDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should level up building on click', async () => {
    spyOn(buildingDetailComponent, 'levelUpBuilding');

    const button = fixture.debugElement.query(By.css('.button__levelUp'));
    button.triggerEventHandler('click', buildingDetailComponent);

    fixture.whenStable().then(() => {
      expect(buildingDetailComponent.levelUpBuilding).toHaveBeenCalled();
    });
  });
});
