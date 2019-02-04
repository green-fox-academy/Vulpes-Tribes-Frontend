import { AppComponent } from '../app/app.component';
import { LoginComponent } from '../app/login/login.component';
import { LogoutComponent } from '../app/logout/logout.component';
import { RegisterComponent } from '../app/register/register.component';
import { KingdomSettingsComponent } from '../app/kingdom-settings/kingdom-settings.component';
import { HeaderComponent } from '../app/header/header.component';
import { GameComponent } from '../app/game/game.component';
import { ResourcesComponent } from '../app/game/resources/resources.component';
import { AlertComponent } from '../app/alert/alert.component';
import { BuildingsComponent } from '../app/game/buildings/buildings.component';
import { BuildingDetailComponent } from '../app/game/buildings/building-details/building-detail.component';
import { BuildingComponent } from '../app/game/buildings/building/building.component';
import { WelcomeScreenComponent } from '../app/welcome-screen/welcome-screen.component';
import { NotificationsComponent } from '../app/game/notifications/notifications.component';
import { NotificationComponent } from '../app/game/notifications/notification/notification.component';
import { TroopsComponent } from '../app/game/troops/troops.component';
import { MenuComponent } from '../app/game/menu/menu.component';
import { LoaderComponent } from '../app/loader/loader.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/app.routes';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomHeaders } from '../app/_models/head.model';
import { AuthService } from '../app/_helpers/authentication/auth.service';
import { AlertService } from '../app/alert/alert.service';
import { ModalService } from '../app/game/buildings/building-details/modal.service';
import { DomService } from '../app/game/buildings/building-details/domService';
import { LoaderService } from '../app/services/loader.service';
import { NotificationFactory } from '../app/_helpers/factories/notification.factory';

export const TESTINGIMPORTS = {
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
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
    TroopsComponent,
    MenuComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AppComponent,
    CustomHeaders,
    AuthService,
    AlertService,
    ModalService,
    DomService,
    LoaderService,
    NotificationFactory,
  ],
};
