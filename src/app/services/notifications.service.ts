import { Injectable } from '@angular/core';
import { NotificationsResponseMock } from '../_helpers/mocks/notificationResponse.mock';
import { TribesNotification } from '../_models/notification.model';
import { NotificationFactory } from '../_helpers/factories/notification.factory';
import { BehaviorSubject } from 'rxjs';

const mockNotifications = new NotificationsResponseMock().notifications;

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {

  private notifications: TribesNotification[] = [];

  private updatedNotifications = new BehaviorSubject<TribesNotification[]>(this.notifications);
  currentNotifications = this.updatedNotifications.asObservable();

  constructor(private notificationFactory: NotificationFactory) {
  }

  createNotification(title: string, type: string, startedAt: number, finishedAt: number) {
    this.notifications
      .push(this.notificationFactory.createNotification(title, type, startedAt, finishedAt));
    this.updatedNotifications.next(this.notifications);
  }

  getNotifications(): TribesNotification[] {
    return this.notifications;
  }

  removeNotification(notificationToRemove: TribesNotification): void {
    this.notifications = this.notifications.filter(notification => notification !== notificationToRemove);
  }
}
