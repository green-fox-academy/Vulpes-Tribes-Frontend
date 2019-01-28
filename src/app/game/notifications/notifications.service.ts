import { Injectable } from '@angular/core';
import { NotificationsResponseMock } from '../../_helpers/mocks/notificationResponse.mock';
import { TribesNotification } from '../../_models/notification.model';
import { NotificationFactory } from '../../_helpers/factories/notification.factory';

const mockNotifications = new NotificationsResponseMock().notifications;

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {

  notifications: TribesNotification[] = [];

  constructor(private notificationFactory: NotificationFactory) {
  }

  createNotification(title: string, type: string, startedAt: number, finishedAt: number): void {
    this.notifications.push(this.notificationFactory.createNotification(title, type, startedAt, finishedAt));
  }

  getNotifications(): TribesNotification[] {
    return this.notifications;
  }
}
