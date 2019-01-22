import { Component, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { BuildingsService } from './buildings.service';
import { BuildingDetailComponent } from './building-details/building-detail.component';
import { ModalService } from './building-details/modal.service';
import { Building } from '../../_models/building.model';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
})
export class BuildingsComponent implements OnInit, OnChanges {

  buildings: Building[] = [];

  @Output() building: Building;

  constructor(private buildingsService: BuildingsService,
              private alertService: AlertService,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.showAllBuildings();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showFinishedBuildings();
  }

  initBuildingModal(building: Building): Building {
    this.modalService.init(BuildingDetailComponent, { building }, {});
    return building;
  }

  showFinishedBuildings() {
    this.buildings = this.buildingsService.filterBuildings('finished');
    console.log(this.showUnfinishedBuildings());
  }

  showUnfinishedBuildings() {
    this.buildings = this.buildingsService.filterBuildings('unfinished');
  }

  showAllBuildings() {
    this.buildings = this.buildingsService.showAllBuildings();
    console.log(this.buildings);

  }

  createBuilding(buildingType: string) {
    this.buildingsService.createBuilding(buildingType);
    this.showFinishedBuildings();
  }
}
