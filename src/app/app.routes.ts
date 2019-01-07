import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {LogoutComponent} from './logout/logout.component';
import {GameComponent} from './game/game.component';
import {AuthGuard} from './_helpers/auth.guard';

const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'game', component: GameComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'game', pathMatch: 'full', canActivate: [AuthGuard]}

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(APP_ROUTES)]
})

export class AppRoutingModule {
}
