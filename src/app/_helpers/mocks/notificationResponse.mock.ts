import { OnInit } from '@angular/core';
import { TribesNotification } from '../../_models/notification.model';

export const notifications: TribesNotification[] = [
  {
    title: 'Building Farm Level 1',
    startedAt: 1548319487056,
    finishedAt: 1548319987056,
  },
  {
    title: 'Troop Level 1',
    startedAt: 1548237439627,
    finishedAt: 1548237439627,
  },
  {
    title: 'My Kingdom',
    startedAt: 1231232312,
    finishedAt: 1231232312,
  },
  {
    title: 'My Kingdom',
    startedAt: 1231232312,
    finishedAt: 1231232312,
  },
];

export class NotificationsResponseMock implements OnInit {

  notifications;

  constructor() {
    this.notifications = notifications;
  }

  ngOnInit() {}
}
