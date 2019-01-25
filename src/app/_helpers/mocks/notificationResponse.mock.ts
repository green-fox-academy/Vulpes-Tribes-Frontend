import { OnInit } from '@angular/core';
import { TribesNotification } from '../../_models/notification.model';

export const notifications: TribesNotification[] = [
  {
    title: 'Building Farm Level 1',
    startedAt: 1548318881113,
    finishedAt: 1584537439627,
  },
  {
    title: 'Building Troop Level 1',
    startedAt: 1548237439627,
    finishedAt: 1548237821668,
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
