import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { LogoutService } from '../sharedServices/logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private logoutService: LogoutService) {
  }

  ngOnInit() {
  }

  loginStatus() {
    return (localStorage.getItem(environment.tribes_token) !== null);
  }

  logout() {
    this.logoutService.logout();
  }
}
