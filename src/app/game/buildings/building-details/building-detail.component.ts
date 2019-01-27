import { Component, Input, OnInit } from '@angular/core';
import { DomService } from './domService';
import { Building } from '../../../_models/building.model';
import { BuildingDetailService } from './building-detail.service';
import { AlertService } from '../../../alert/alert.service';
import { BuildingComponent } from '../building/building.component';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css'],
})
export class BuildingDetailComponent extends BuildingComponent implements OnInit {

  @Input() imgSrc: string;

  constructor(private domService: DomService,
              private buildingDetailService: BuildingDetailService,
              private alertService: AlertService) {
    super();
  }

  destroy() {
    this.domService.removeComponent();
  }

  levelUpBuilding(building: Building) {
    this.buildingDetailService.levelUpBuilding(building)
      .subscribe((response) => {
        this.building.level = response.body.response.level;
        this.alertService.success('Building leveled up');
      });
  }

}
