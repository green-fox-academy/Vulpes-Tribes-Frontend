import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomHeaders } from './_models/head.model';
import { APP_BASE_HREF } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';
import { ResourcesComponent } from './game/resources/resources.component';
import { AlertComponent } from './alert/alert.component';
import { BuildingsComponent } from './game/buildings/buildings.component';
import { BuildingDetailComponent } from './game/buildings/building-details/building-detail.component';
import { BuildingComponent } from './game/buildings/building/building.component';
import { KingdomSettingsComponent } from './kingdom-settings/kingdom-settings.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        BuildingDetailComponent,
        WelcomeScreenComponent,
        BuildingComponent,

      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
      ],
      providers: [
        CustomHeaders,
        { provide: APP_BASE_HREF, useValue : '/' },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'Vulpes|Tribes'", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Vulpes|Tribes');
  });

  it('should have the router outlet ', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBe(null);
  });

});
