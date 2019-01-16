import {Component, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {BuildingsService} from './buildings.service';
import {BuildingDetailComponent} from './building-details/building-detail.component';
import {ModalService} from './building-details/modal.service';
import {Building} from '../../_models/building.model';
import {AlertService} from '../../alert/alert.service';
import {Observable, TimeInterval} from 'rxjs';

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
    this.getInitialBuildings();
    this.buildingsService.convertResponseToBuilding(this.buildings);
    setInterval(() => {
      this.buildingsService.updateBuildings();
      console.log(this.buildings);
    },          5000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildings = this.buildingsService.getBuildings();
  }

  initBuildingModal(building: Building): Building {
    this.modalService.init(BuildingDetailComponent, {building}, {});
    return building;
  }

  createBuilding(buildingType: string) {
    this.buildings.push(this.buildingsService.createBuilding(buildingType));
  }

  getInitialBuildings() {
    this.buildingsService.getBuildingsFromBackend()
      .subscribe((response) => {
        this.buildings = { ...response.body }.buildings;
      });
  }
}
