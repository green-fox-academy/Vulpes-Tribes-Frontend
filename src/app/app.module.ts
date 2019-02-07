import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginInterceptor } from './_helpers/interceptors/login.interceptor';
import { CustomHeaders } from './_models/head.model';
import { APP_BASE_HREF } from '@angular/common';
import { TokenInterceptor } from './_helpers/interceptors/token.interceptor';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';
import { ResourcesComponent } from './game/resources/resources.component';
import { AuthService } from './_helpers/authentication/auth.service';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { ResourceInterceptor } from './_helpers/interceptors/resources.interceptor';
import { BuildingsComponent } from './game/buildings/buildings.component';
import { BuildingsInterceptor } from './_helpers/interceptors/buildings.interceptor';
import { BuildingDetailComponent } from './game/buildings/building-details/building-detail.component'; // tslint:disable-line
import { BuildingComponent } from './game/buildings/building/building.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { KingdomSettingsComponent } from './kingdom-settings/kingdom-settings.component';
import { NotificationsComponent } from './game/notifications/notifications.component';
import { NotificationComponent } from './game/notifications/notification/notification.component';
import { TroopsComponent } from './game/troops/troops.component';
import { TroopsInterceptor } from './_helpers/interceptors/troops.interceptor';
import { KingdomInterceptor } from './_helpers/interceptors/kingdom.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
import { environment } from '../environments/environment';
import { NotificationFactory } from './_helpers/factories/notification.factory';
import { MenuComponent } from './game/menu/menu.component';

@NgModule({
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
    LoaderService,
    NotificationFactory,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    environment.envName === 'development' ? [
      { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ResourceInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: BuildingsInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: TroopsInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: KingdomInterceptor, multi: true },
    ] : [
    ],
  ],

  entryComponents: [
    BuildingDetailComponent,
    NotificationComponent
  ],

  bootstrap: [AppComponent],
})
export class AppModule {
}
