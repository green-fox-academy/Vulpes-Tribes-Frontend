import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule} from './app.routes';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryDbService} from 'angular-in-memory-web-api';
import { InMemoryUsersService} from './_helpers/InMemoryUsersService';
import { HttpModule} from '@angular/http';
import { InMemoryTokenService} from './_helpers/InMemoryTokenService';
import { GameComponent } from './game/game.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GameComponent,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryUsersService)
  ],
  providers: [InMemoryTokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
