import { RouterModule, Routes} from '@angular/router';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
import { NgModule} from '@angular/core';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeScreenComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(APP_ROUTES)]
})

export class AppRoutingModule {}
