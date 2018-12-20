import { Component, OnInit } from '@angular/core';
import {KingdomSettingsService} from '../kingdom-settings/kingdom-settings.service';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class KingdomSettingsComponent implements OnInit {

  kingdom = {
    name: 'My Kingdom',
  };

  constructor(private settingsService: KingdomSettingsService) { }

  ngOnInit() {
    this.showSettings();
  }

  showSettings(): void {
    this.kingdom = this.settingsService.getSettings();
  }

}
