import {Component, OnInit, ViewChild} from '@angular/core';
import {RegisterService} from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerFormElement') registerForm;

  user = {
    username: '',
    password: '',
    kingdom: '',
  };

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  onSumbit() {
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    this.user.kingdom = this.registerForm.value.kingdom;
    this.registerService.createUser(this.user);
    console.log(this.user);
  }

}
