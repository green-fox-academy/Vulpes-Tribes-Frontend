import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-settings2',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @ViewChild('settingsFormElement') settingsForm;

  name = '';

  constructor() {
  }

  ngOnInit() {
  }

  save() {
    alert('saved');
  }

}
