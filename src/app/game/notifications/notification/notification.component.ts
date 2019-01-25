import { Component, Input, OnInit } from '@angular/core';
import { TribesNotification } from '../../../_models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {

  @Input() notification: TribesNotification;
  completion: number;

  constructor() {

  }

  ngOnInit() {
    this.getCompletion();
    setInterval(() => this.getCompletion(), 1000);
  }

  getCompletion() {
    this.completion = Date.now() / (this.notification.finishedAt);
  }

}
