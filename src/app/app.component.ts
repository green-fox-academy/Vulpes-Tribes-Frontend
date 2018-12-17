import {Component, OnInit, ViewChild} from '@angular/core';
import {LogoutComponent} from './logout/logout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vulpes|Tribes';
  @ViewChild('formElement') signupForm;

  constructor(private logoutComponent: LogoutComponent) {}
}
