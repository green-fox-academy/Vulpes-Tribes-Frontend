import { Component, OnInit } from '@angular/core';
import { TribesNotification } from '../_models/notification.model';
import { NotificationsService } from '../sharedServices/notifications.service';
import { ResourcesService } from './resources/resources.service';
import { Resources } from '../_models/resources.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {

  notifications: TribesNotification[];
  resources: Resources;

  constructor(private notificationService: NotificationsService,
              private resourcesService: ResourcesService) {
  }

  ngOnInit() {
    this.notificationService.currentNotifications
      .subscribe(notification => this.notifications = notification);
    this.resourcesService.getResources()
      .subscribe(response => this.resources = response);
  }
}
