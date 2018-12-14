import { RouterModule, Routes} from '@angular/router';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
import { NgModule} from '@angular/core';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(APP_ROUTES)]
})

export class AppRoutingModule {}