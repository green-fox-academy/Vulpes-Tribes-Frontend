import { Component, Input, OnInit, OnChanges, Output } from '@angular/core';
import { Building } from '../../../_models/building.model';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css'],
})
export class BuildingComponent implements OnInit {

  @Input() building: Building;
  imgSrc: string;

  constructor() {}

  ngOnInit() {
    this.imgSrc = '/assets/images/buildings/' + this.building.type + '.svg';
  }
}
