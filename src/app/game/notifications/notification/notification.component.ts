import {Component, Input, OnInit} from '@angular/core';
import {TribesNotification} from '../../../_models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {

  @Input() notification: TribesNotification;
  completion: number = 0;

  constructor() {

  }

  ngOnInit() {
    if (Date.now() <= this.notification.finishedAt) {
      this.getCompletion();
    } else {
      this.completion = 1;
    }
  }

  getCompletion() {
    setInterval(() => {
      const buildTime = this.notification.finishedAt - this.notification.startedAt;
      if (this.completion < 1) {
        this.completion += (buildTime / 600000000);
      } else {
        this.completion = 1;
      }
    }, 1000);
  }

}
