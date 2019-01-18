import {Component, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {BuildingsService} from './buildings.service';
import {BuildingDetailComponent} from './building-details/building-detail.component';
import {ModalService} from './building-details/modal.service';
import {Building} from '../../_models/building.model';
import {AlertService} from '../../alert/alert.service';

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
    this.getBuildings();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  initBuildingModal(building: Building): Building {
    this.modalService.init(BuildingDetailComponent, {building}, {});
    return building;
  }

  createBuilding(buildingType: string) {
    this.buildingsService.createBuilding(buildingType);
    console.log(this.buildings);
  }

  getBuildings() {
    this.buildingsService.getBuildings().subscribe(response => {
      this.buildings = response.body.buildings;
    });
  }
}
