// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {AppComponent} from '../app/app.component';
import {LoginComponent} from '../app/login/login.component';
import {LogoutComponent} from '../app/logout/logout.component';
import {RegisterComponent} from '../app/register/register.component';
import {HeaderComponent} from '../app/header/header.component';
import {GameComponent} from '../app/game/game.component';
import {ResourcesComponent} from '../app/game/resources/resources.component';
import {SettingsComponent} from '../app/game/settings/settings.component';
import {AlertComponent} from '../app/alert/alert.component';
import {BuildingsComponent} from '../app/game/buildings/buildings.component';
import {BuildingDetailComponent} from '../app/game/buildings/building-details/building-detail.component';
import {BuildingComponent} from '../app/game/buildings/building/building.component';

export const environment = {
  production: false,

  // Endpoints
  login: '/login',
  register: '/register',
  logout: '/logout',
  root: '/root',
  game: '/game',
  createBuilding: '/game/buildings-new',

  // Global variables
  tribes_token: 'tribes_token'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
