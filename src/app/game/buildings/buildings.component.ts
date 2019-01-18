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
    this.getInitialBuildings();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  initBuildingModal(building: Building): Building {
    this.modalService.init(BuildingDetailComponent, { building }, {});
    return building;
  }

  getInitialBuildings() {
    const localBuildings = JSON.parse(localStorage.getItem('buildings'));
    if (localBuildings !== null &&
      localBuildings.length > this.buildings.length) {
      this.buildingsService.updateBuildings().subscribe((response) => {
        this.buildings = response.body['updatedBuildings'];
      });
    } else if (localBuildings !== null &&
      localBuildings.length < this.buildings.length) {
      localStorage.setItem('buildings', JSON.stringify(this.buildings));
    } else {
      this.getBackendBuildings();
    }
  }

  getBackendBuildings() {
    this.buildingsService.getBuildingsFromBackend()
      .subscribe((response) =>  {
        this.buildings = response.body.buildings;
        localStorage.setItem('buildings', JSON.stringify(response.body.buildings));
      });
  }

  showFinishedBuildings() {
    this.showAllBuildings();
    this.buildings = this.buildings.filter(building => building.finishedAt <= Date.now());
  }

  showUnfinishedBuildings() {
    this.showAllBuildings();
    this.buildings = this.buildings.filter(building => building.finishedAt > Date.now());
  }

  showAllBuildings() {
    this.buildings = JSON.parse(localStorage.getItem('buildings'));
  }

  createBuilding(buildingType: string) {
    this.buildingsService.createBuilding(buildingType);
    this.showAllBuildings();
  }
}
