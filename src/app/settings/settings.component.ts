import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings/settings.service';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  kingdom = {
    name: 'My Kingdom',
  };

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.showSettings();
  }

  showSettings(): void {
    this.settings = this.settingsService.showSettings();
  }

}
