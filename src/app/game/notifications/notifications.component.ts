import { Component, OnInit } from '@angular/core';
import {Building} from '../../_models/building.model';
import {NotificationsService} from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  buildings: Building[];

  constructor(private notificationService: NotificationsService) { }

  ngOnInit() {
    this.buildings = this.notificationService.getUnfinishedBuildings();
  }

}
