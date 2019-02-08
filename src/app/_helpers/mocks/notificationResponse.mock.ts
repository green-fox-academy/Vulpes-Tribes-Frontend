import { OnInit } from '@angular/core';
import { TribesNotification } from '../../_models/notification.model';

export const notifications: TribesNotification[] = [
  {
    title: 'Farm',
    type: 'building',
    startedAt: 1548667804817,
    finishedAt: 1548668404817,
    level: 1,
  },
  {
    title: 'Troop',
    type: 'troop',
    startedAt: 1548237439627,
    finishedAt: 1548514370921,
    level: 1,
  },
  {
    title: 'My Kingdom',
    type: 'general',
    startedAt: 1231232312,
    finishedAt: 1548514370921,
    level: 0,
  },
  {
    title: 'My Kingdom',
    type: 'general',
    startedAt: 1231232312,
    finishedAt: 1548514370921,
    level: 0,
  },
];

export class NotificationsResponseMock implements OnInit {

  notifications;

  constructor() {
    this.notifications = notifications;
  }

  ngOnInit() {}
}
