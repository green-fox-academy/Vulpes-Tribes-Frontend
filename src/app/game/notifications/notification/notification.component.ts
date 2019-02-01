import { Component, Input, OnInit } from '@angular/core';
import { TribesNotification } from '../../../_models/notification.model';

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
    this.imgSrc = `/assets/images/${ this.notification.title.toLowerCase() }s/${ this.notification.type.toLowerCase() }.svg`; // tslint:disable-line
    this.completion = this.getCompletion();
    setInterval(() =>
        (Date.now() <= this.notification.finishedAt) ? this.completion = this.getCompletion() : this.completion = 1 // tslint:disable-line
      ,         1000);
  }

  getCompletion(): number {
    return this.getCurrentBuildTime(this.notification.startedAt) /
      this.getBuildTime(this.notification.startedAt, this.notification.finishedAt);
  }

  getBuildTime(timeOfStart: number, timeOfFinish: number): number {
    return (timeOfFinish - timeOfStart);
  }

  getCurrentBuildTime(timeOfStart: number): number {
    return (Date.now() - timeOfStart);
  }
}
