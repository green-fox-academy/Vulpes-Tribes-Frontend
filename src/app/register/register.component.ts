import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
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

  onSubmit() {
    this.registerService.createUser(this.user);
  }

}
