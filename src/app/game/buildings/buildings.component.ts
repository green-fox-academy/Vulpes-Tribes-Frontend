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
    this.buildingsService.filterBuildings('finished');
  }

  showUnfinishedBuildings() {
    this.buildingsService.filterBuildings('unfinished');
  }

  showAllBuildings() {
    this.buildings = this.buildingsService.showAllBuildings();
  }

  createBuilding(buildingType: string) {
    this.buildingsService.createBuilding(buildingType)
      .subscribe((response) => {
        this.buildingsService.updateLocalStorage(response.response);
        this.alertService.success(`${response.response.type} was created`);
      });
    this.showFinishedBuildings();
  }
}
