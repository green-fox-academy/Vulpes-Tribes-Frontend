import { Component, Input, OnInit } from '@angular/core';
import { DomService } from './domService';
import { Building } from '../../../_models/building.model';
import { BuildingDetailService } from './building-detail.service';
import { AlertService } from '../../../alert/alert.service';

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
        this.alertService.success('Building leveled up');
      });
  }

}
