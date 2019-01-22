import { Component, OnInit, Output } from '@angular/core';
import { NotificationsResponseMock } from '../../_helpers/mocks/notificationResponse.mock';
import { TribesNotification } from '../../_models/notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {

  notifications: TribesNotification[];
  notification: TribesNotification;

  constructor() { }

  ngOnInit() {
    this.notifications = new NotificationsResponseMock().notifications;
    console.log(this.notifications);
  }

}
