import { Component, OnInit } from '@angular/core';
import { TribesNotification } from '../_models/notification.model';
import { NotificationsService } from '../sharedServices/notifications.service';
import { ResourcesService } from './resources/resources.service';
import { Resources } from '../_models/resources.model';
import { BuildingsService } from './buildings/buildings.service';
import { TroopsService } from './troops/troops.service';
import { Building } from '../_models/building.model';
import { Troop } from '../_models/troop.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {

  notifications: TribesNotification[];
  resources: Resources;
  buildings: Building[];
  troops: Troop[];

  constructor(private notificationService: NotificationsService,
              private resourcesService: ResourcesService,
              private buildingsService: BuildingsService,
              private troopsService: TroopsService) {
  }

  ngOnInit() {
    this.notificationService.currentNotifications
      .subscribe(notification => this.notifications = notification);
    this.resourcesService.getResources()
      .subscribe(response => this.resources = response);
    this.buildingsService.showAllBuildings()
      .subscribe(response => this.buildings = response);
    this.troopsService.getTroops()
      .subscribe(response => this.troops = response);
  }
}
