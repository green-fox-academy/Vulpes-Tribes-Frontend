import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { NgModule } from '@angular/core';
import { KingdomSettingsComponent } from './kingdom-settings/kingdom-settings.component';
import { LogoutComponent } from './logout/logout.component';
import { GameComponent } from './game/game.component';
import { AuthGuard } from './_helpers/authentication/auth.guard';
import { ResourcesComponent } from './game/resources/resources.component';
import { BuildingsComponent } from './game/buildings/buildings.component';
import { BuildingDetailComponent } from './game/buildings/building-details/building-detail.component';
import { NotificationsComponent } from './game/notifications/notifications.component';
import { TroopsComponent } from './game/troops/troops.component';

const APP_ROUTES: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },
  { path: 'kingdom', component: GameComponent, canActivate: [AuthGuard], children: [
      { path: 'notifications', component: NotificationsComponent },
      { path: 'settings', component: KingdomSettingsComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'troops', component: TroopsComponent },
      {
        path: 'buildings', component: BuildingsComponent, children: [
          { path: ':id', component: BuildingDetailComponent },
        ],
      },
    ],
  },
  // For now, everything is redirected straight to the game, for release, update to welcome screen
  { path: '**', redirectTo: 'kingdom', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
})

export class AppRoutingModule {
}
