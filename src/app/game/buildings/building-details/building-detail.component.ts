import {Component, Input, OnInit} from '@angular/core';
import {DomService} from './domService';
import {Building} from '../../../_models/building.model';

@Component({
  selector: 'app-building',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css']
})
export class BuildingDetailComponent implements OnInit {

  @Input() building: Building;

  constructor(private domService: DomService) {
  }

  ngOnInit() {

  }

  destroy() {
    this.domService.removeComponent();
  }

}
