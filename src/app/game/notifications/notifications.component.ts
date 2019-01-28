import { Component, OnInit } from '@angular/core';
import { TribesNotification } from '../../_models/notification.model';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {

  notifications: TribesNotification[];
  notification: TribesNotification;

  constructor(private notificationService: NotificationsService) { }

  ngOnInit() {
    this.notifications = this.notificationService.getNotifications();
  }
}
