import { Component, OnInit } from '@angular/core';
import {KingdomSettingsService} from '../kingdom-settings/kingdom-settings.service';
import { Kingdom } from '../_models/kingdom.model';
import { KingdomService } from '../services/kingdom.service';



@Component({
  selector: 'app-settings',
  templateUrl: './kingdom-settings.component.html',
  styleUrls: ['./kingdom-settings.component.css']
})
export class KingdomSettingsComponent implements OnInit {

  name;

  constructor(private settingsService: KingdomSettingsService) { }

  ngOnInit() {
    this.showSettings();
  }

  showSettings(): void {
    this.name = this.settingsService.getSettings().subscribe(response => this.name = response.body.name);
  }

}
