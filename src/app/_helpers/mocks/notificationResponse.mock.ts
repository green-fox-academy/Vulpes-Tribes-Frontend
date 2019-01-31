import { OnInit } from '@angular/core';
import { TribesNotification } from '../../_models/notification.model';

export const notifications: TribesNotification[] = [
  {
    title: 'Building Farm Level 1',
    type: 'building',
    startedAt: 1548667804817,
    finishedAt: 1548668404817,
  },
  {
    title: 'Building Troop Level 1',
    type: 'troop',
    startedAt: 1548237439627,
    finishedAt: 1548514370921,
  },
  {
    title: 'My Kingdom',
    type: 'general',
    startedAt: 1231232312,
    finishedAt: 1548514370921,
  },
  {
    title: 'My Kingdom',
    type: 'general',
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
