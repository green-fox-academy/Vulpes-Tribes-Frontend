import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Vulpes|Tribes';
  @ViewChild('formElement') signupForm;

  constructor() {
  }
}
