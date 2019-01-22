import {Component, OnInit, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import {BuildingsComponent} from './buildings/buildings.component';
import {NotificationsService} from './notifications/notifications.service';
import {NotificationsComponent} from './notifications/notifications.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [NotificationsComponent],
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
