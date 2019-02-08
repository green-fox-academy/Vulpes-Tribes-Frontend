import { Injectable } from '@angular/core';
import { TribesNotification } from '../_models/notification.model';
import { NotificationFactory } from '../_helpers/factories/notification.factory';
import { BehaviorSubject } from 'rxjs';

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
    const newNotification = this.notificationFactory
      .createNotification(title, type, startedAt, finishedAt);
    if (this.checkIfNotificationExist(newNotification)) {
      this.notifications.push(newNotification);
    }
    this.updatedNotifications.next(this.notifications);
  }

  getNotifications(): TribesNotification[] {
    return this.notifications;
  }

  removeNotification(notificationToRemove: TribesNotification): void {
    this.notifications = this.notifications.filter((notification) => notification.startedAt !== notificationToRemove.startedAt);
  }

  checkIfNotificationExist(notificationToCheck: TribesNotification): boolean {
    return (this.notifications
      .filter(notification => notification.startedAt === notificationToCheck.startedAt).length === 0);
  }
}
