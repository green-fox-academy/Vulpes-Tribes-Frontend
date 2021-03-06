import { Injectable } from '@angular/core';
import { notifications } from '../../_helpers/mocks/notificationResponse.mock';
import { TribesNotification } from '../../_models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {

  constructor() {
  }

  getNotifications(): TribesNotification[] {
    return notifications;
  }
}
