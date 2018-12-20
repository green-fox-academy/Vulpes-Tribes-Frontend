import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {LogoutComponent} from '../logout/logout.component';
import {LogoutService} from '../logout/logout.service';
import {RegisterService} from '../register/register.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService,
              private logout: LogoutService,
              private register: RegisterService) {
  }

  ngOnInit() {
  }

  loginStatus() {
    return (localStorage.getItem(environment.tribes_token) !== null);
  }

}
