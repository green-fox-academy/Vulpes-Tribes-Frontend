import { Component, OnInit, DoCheck } from '@angular/core';
import { TribesNotification } from '../../_models/notification.model';
import { NotificationsService } from './notifications.service';
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

  constructor(private notificationService: NotificationsService) { }

  ngOnInit() {
    setInterval(() => {
      this.notifications = this.notificationService.getNotifications();
    }, 1000);

  }
  //
  // createNotification(title: string, type: string, startedAt: number, finishedAt: number) {
  //   this.notifications.push()
  // }

}
