import { TribesNotification } from '../../_models/notification.model';

export class NotificationFactory {

  constructor() {
  }

  createNotification(title: string, type: string, startedAt: number, finishedAt: number, level: number): TribesNotification {
    return new TribesNotification(title, type, startedAt, finishedAt, level);
  }
}
