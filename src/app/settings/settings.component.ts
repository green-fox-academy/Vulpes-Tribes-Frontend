import { Component, OnInit } from '@angular/core';
import {SettingService} from '../setting.service';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  kingdom = {
    name: 'My Kingdom',
  };

  constructor(private settingService: SettingService) { }

  ngOnInit() {
  }

}
