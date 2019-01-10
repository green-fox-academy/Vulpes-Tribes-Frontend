import {Component, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {BuildingsService} from './buildings.service';
import {BuildingDetailComponent} from './building-details/building-detail.component';
import {ModalService} from './building-details/modal.service';
import {Building} from '../../_models/building.model';
import {AlertService} from '../../alert/alert.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit, OnChanges {

  buildings;

  @Output() building: Building;

  constructor(private buildingsService: BuildingsService,
              private alertService: AlertService,
              private modalService: ModalService) {

  }

  ngOnInit() {
    console.log('Buildings component initialized');
    this.buildingsService.getBuildings().subscribe(response =>
      this.buildings = {...response.body});
    console.log(this.buildings);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildingsService.getBuildings().subscribe(response =>
      this.buildings = {...response.body});
    console.log(this.buildings);
  }

  initBuildingModal(building: Building): Building {
    this.modalService.init(BuildingDetailComponent, {building: building}, {});
    return building;
  }

  createBuilding(buildingType: string) {
    this.buildingsService.createBuilding(buildingType)
      .subscribe(response => this.alertService.success(response.type + ' was created successfully'));
    console.log(this.buildings);
  }

}
