import { OnInit } from '@angular/core';
import { TribesNotification } from '../../_models/notification.model';

export const notifications: TribesNotification[] = [
  {
    title: 'Building Farm Level 1',
    type: 'Building',
    startedAt: 1548667804817,
    finishedAt: 1548668404817,
  },
  {
    title: 'Building Troop Level 1',
    type: 'Troop',
    startedAt: 1548237439627,
    finishedAt: 1548514370921,
  },
  {
    title: 'My Kingdom',
    type: 'General',
    startedAt: 1231232312,
    finishedAt: 1548514370921,
  },
  {
    title: 'My Kingdom',
    type: 'General',
    startedAt: 1231232312,
    finishedAt: 1548514370921,
  },
];

export class NotificationsResponseMock implements OnInit {

  notifications;

  constructor() {
    this.notifications = notifications;
  }

  ngOnInit() {}
}
