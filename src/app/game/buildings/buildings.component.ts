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

  buildings;

  @Output() building: Building;

  constructor(private buildingsService: BuildingsService,
              private alertService: AlertService,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.getBuildings();
    console.log(this.buildings);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getBuildings();
    console.log(`component state ${this.buildings}`);
    console.log(localStorage.getItem('buildings'));
  }

  initBuildingModal(building: Building): Building {
    this.modalService.init(BuildingDetailComponent, { building }, {});
    return building;
  }

  createBuilding(buildingType: string) {
    this.buildingsService.createBuilding(buildingType)
      .subscribe(response => this.alertService
        .success(`${response.type} was created successfully`));
    this.getBuildings();
  }

  getBuildings() {
    this.buildingsService.getBuildings().subscribe(response =>
      this.buildings = { ...response.body });
  }

}
