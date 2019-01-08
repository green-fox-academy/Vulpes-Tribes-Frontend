import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginFormElement') loginForm;

  user = {
    username: '',
    password: ''
  };

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.user);
  }
}
