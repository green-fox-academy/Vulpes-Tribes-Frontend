import { Component, OnInit, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { BuildingsService } from './buildings.service';
import { Building } from '../../_models/building.model';
import { TribesNotification } from '../../_models/notification.model';
import { PurchaseService } from '../../sharedServices/purchase.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
})
export class BuildingsComponent implements OnInit, OnChanges {

  buildings: Building[] = [];
  @Output() createNotification = new EventEmitter<TribesNotification>();
  @Output() selectedBuilding: Building;

  @Output() building: Building;

  constructor(private buildingsService: BuildingsService,
              private purchaseService: PurchaseService,
              private alertService: AlertService,
              ) {
  }

  ngOnInit() {
    this.showFinishedBuildings();
    this.buildingsService.initializeUnfinishedBuildingsAsNotifications();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showFinishedBuildings();
  }

  selectBuilding(building: Building) {
    this.selectedBuilding = building;
  }

  deselectBuilding() {
    this.selectedBuilding = null;
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
      setTimeout(() => {
        this.buildings.push(response);
        this.showFinishedBuildings();
      },         (response.finishedAt - response.startedAt));
    });
  }
}
