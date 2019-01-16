import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
})
export class WelcomeScreenComponent implements OnInit {
  title = 'Vulpes|Tribes';
  @ViewChild('formElement') signupForm;

  constructor() {
  }

  ngOnInit() {
  }
}
