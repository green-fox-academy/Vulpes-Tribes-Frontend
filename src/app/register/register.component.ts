import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerFormElement') registerForm;
  private id: number;
  private kingdomId: number;


  user = {
    id: null,
    username: '',
    password: '',
    kingdom: '',
    kingdomId: null
  };

  constructor() { }

  ngOnInit() {
  }

  onSumbit() {
    this.user.id = Math.floor(Math.random() * (20000 - 10000));
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    this.user.kingdom = this.registerForm.value.kingdom;
    this.user.kingdomId = Math.floor(Math.random() * 10000);
    console.log(this.user);
  }

}
