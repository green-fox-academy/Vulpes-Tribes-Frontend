import { OnInit } from '@angular/core';
import { TribesNotification } from '../../_models/notification.model';

export const notifications: TribesNotification[] = [
  {
    title: 'Building Farm Level 1',
    startedAt: 1231232312,
    finishedAt: 1231532312,
  },
  {
    title: 'Building Troop Level 1',
    startedAt: 1231232312,
    finishedAt: 1232232312,
  },
  {
    title: 'My Kingdom',
    startedAt: 1231232312,
    finishedAt: 1231232312,
  },
  {
    title: 'My Kingdom',
    startedAt: 12345678,
    finishedAt: 1345687,
  },
];

export class NotificationsResponseMock implements OnInit {

  notifications;

  constructor() {
    this.notifications = notifications;
  }

  ngOnInit() {}
}
