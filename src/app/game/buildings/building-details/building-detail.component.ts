import {Component, Input, OnInit, SimpleChange} from '@angular/core';
import { DomService } from './domService';
import { Building } from '../../../_models/building.model';
import { BuildingDetailService } from './building-detail.service';
import { AlertService } from '../../../alert/alert.service';
import {detectChanges} from '@angular/core/src/render3';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css'],
})
export class BuildingDetailComponent implements OnInit {

  @Input() building: Building;
  @Input() imgSrc: string;

  constructor(private domService: DomService,
              private buildingDetailService: BuildingDetailService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.imgSrc = `/assets/images/buildings/${this.building.type}.svg`;
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
