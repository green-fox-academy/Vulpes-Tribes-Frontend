import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

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
    this.user.username = this.loginForm.value.username;
    this.user.password = this.loginForm.value.password;
    this.loginService.login(this.user);
    console.log(this.loginService.isLoggedIn());
    console.log(localStorage);
    console.log(this.loginService.isLoggedIn());
    console.log(this.loginForm);
    console.log(this.user);
  }
}
