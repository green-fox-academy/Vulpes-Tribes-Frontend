import { Component, OnInit, DoCheck } from '@angular/core';
import { TribesNotification } from '../../_models/notification.model';
import { NotificationsService } from '../../sharedServices/notifications.service';
import { BuildingsComponent } from '../buildings/buildings.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [BuildingsComponent],
})
export class NotificationsComponent implements OnInit {

  notifications: TribesNotification[];
  notification: TribesNotification;

  constructor(private notificationService: NotificationsService) {
  }

  ngOnInit() {
    this.notifications = this.notificationService.getNotifications();
  }
}
