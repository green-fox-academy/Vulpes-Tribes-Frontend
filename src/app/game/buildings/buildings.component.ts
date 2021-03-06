import { Component, OnInit, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { BuildingsService } from './buildings.service';
import { BuildingDetailComponent } from './building-details/building-detail.component';
import { ModalService } from './building-details/modal.service';
import { Building } from '../../_models/building.model';
import { AlertService } from '../../alert/alert.service';
import { TribesNotification } from '../../_models/notification.model';
import { NotificationsService } from '../../sharedServices/notifications.service';
import { PurchaseService } from '../../sharedServices/purchase.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
})
export class BuildingsComponent implements OnInit, OnChanges {

  buildings: Building[] = [];
  @Output() createNotification = new EventEmitter<TribesNotification>();

  @Output() building: Building;

  constructor(private buildingsService: BuildingsService,
              private alertService: AlertService,
              private modalService: ModalService,
              private purchaseService: PurchaseService) {
  }

  ngOnInit() {
    this.showFinishedBuildings();
    this.buildingsService.initializeUnfinishedBuildingsAsNotifications();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showFinishedBuildings();
  }

  initBuildingModal(building: Building): Building {
    this.modalService.init(BuildingDetailComponent, { building }, {});
    return building;
  }

  showFinishedBuildings() {
    this.buildingsService.filterBuildings('finished')
      .subscribe(response => this.buildings = response);
  }

  showUnfinishedBuildings() {
    this.buildingsService.filterBuildings('unfinished')
      .subscribe(response => this.buildings = response);
  }

  showAllBuildings() {
    this.buildingsService.showAllBuildings()
      .subscribe(response => this.buildings = response);
  }

  createBuilding(buildingType: string) {
    this.buildingsService.createBuilding(buildingType).subscribe((response) => {
      this.buildings.push(response);
    });
    this.showFinishedBuildings();
  }
}
