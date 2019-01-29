import { Component, Input, OnInit } from '@angular/core';
import { TribesNotification } from '../../../_models/notification.model';
import { CONSTANTS } from '../../../../environments/constants';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {

  @Input() notification: TribesNotification;
  completion: number = 0;
  imgSrc: string;

  constructor() {
  }

  ngOnInit() {
    this.imgSrc = `/assets/images/${this.notification.title.toLowerCase()}s/${this.notification.type.toLowerCase()}.svg`;
    setInterval(() =>
        (Date.now() <= this.notification.finishedAt) ? this.completion += this.getCompletion() : this.completion = 1 // tslint:disable-line
    ,           1000);
  }

  getCompletion(): number {
    const buildTime = (this.notification.finishedAt - Date.now()) - (this.notification.startedAt - Date.now()); // tslint:disable-line
    return (buildTime / CONSTANTS.BuildingTimePointOnePercent);
  }
}
