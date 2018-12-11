import {Component, OnInit, ViewChild} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.username = this.loginForm.value.username;
    this.user.password = this.loginForm.value.password;
    console.log(this.loginForm);
    console.log(this.user);
  }

}
