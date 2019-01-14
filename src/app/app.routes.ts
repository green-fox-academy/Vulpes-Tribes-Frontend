import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {WelcomeScreenComponent} from './welcome-screen/welcome-screen.component';
import {NgModule} from '@angular/core';
import { KingdomSettingsComponent } from './kingdom-settings/kingdom-settings.component';
import {LogoutComponent} from './logout/logout.component';
import {GameComponent} from './game/game.component';
import {AuthGuard} from './_helpers/authentication/auth.guard';
import {SettingsComponent} from './game/settings/settings.component';
import {ResourcesComponent} from './game/resources/resources.component';
import {BuildingsComponent} from './game/buildings/buildings.component';
import {BuildingDetailComponent} from './game/buildings/building-details/building-detail.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeScreenComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', redirectTo: '', component: LoginComponent},
  {path: 'kingdom', component: KingdomSettingsComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', redirectTo: 'game', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'game', component: GameComponent, canActivate: [AuthGuard], children: [
      {path: 'settings', component: SettingsComponent},
      {path: 'resources', component: ResourcesComponent},
      {path: 'buildings', component: BuildingsComponent, children: [
          {path: ':id', component: BuildingDetailComponent}
        ]}
    ]
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(APP_ROUTES)]
})

export class AppRoutingModule {
}
