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
    this.showAllBuildings();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  initBuildingModal(building: Building): Building {
    this.modalService.init(BuildingDetailComponent, {building}, {});
    return building;
  }

  getBackendBuildings() {
    this.buildingsService.getBuildingsFromBackend()
      .subscribe((response) => {
        this.buildings = response.body.buildings;
        localStorage.setItem('buildings', JSON.stringify(response.body.buildings));
      });
  }

  showFinishedBuildings() {
    this.buildingsService.showFinishedBuildings().subscribe(response => this.buildings = response.body['finishedBuildings']);
  }

  showUnfinishedBuildings() {
    this.buildingsService.showUnfinishedBuildings().subscribe(response => this.buildings = response.body['unfinishedBuildings']);
  }

  showAllBuildings() {
    if (localStorage.getItem('buildings') !== null) {
      this.buildings = JSON.parse(localStorage.getItem('buildings'));
    } else {
      this.getBackendBuildings();
    }
  }

  createBuilding(buildingType: string) {
    this.buildingsService.createBuilding(buildingType)
      .subscribe((response) => {
        localStorage.setItem('buildings', JSON.stringify(this.buildings));
        this.alertService.success(`${response.newBuilding.type} was created`);
      });
  }
}
