import { Component, OnInit } from '@angular/core';
import { TribesNotification } from '../_models/notification.model';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {

  notifications: TribesNotification[];

  constructor(private notificationService: NotificationsService) {
  }

  ngOnInit() {
    this.notificationService.currentNotifications.subscribe(notification => {
      this.notifications = notification;
    });
  }
}
