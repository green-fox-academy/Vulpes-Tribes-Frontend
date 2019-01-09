import {Component, OnInit, Output} from '@angular/core';
import {BuildingsService} from './buildings.service';
import {BuildingDetailComponent} from './building-details/building-detail.component';
import {ModalService} from './building-details/modal.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Building} from '../../_models/building.model';
import {timestamp} from 'rxjs/operators';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  buildings;
  buildingComponents: [Building];

  @Output() building: Building;


  constructor(private buildingsService: BuildingsService, private modalService: ModalService) {

  }

  ngOnInit() {
    console.log('Buildings component initialized');
    this.buildingsService.getBuildings().subscribe(response =>
      this.buildings = {...response.body});
    console.log(this.buildings);
  }

  findBuilding(index: number): Building {
    for (let i = 0; i < this.buildings.buildings.length; i++) {
      if (this.buildings.buildings[i].id === index) {
        this.building = this.buildings.buildings[i];
        return this.buildings.buildings[i];
      }
    }
  }

  initBuildingModal(index: number): Building {
    let building = this.findBuilding(index);
    this.modalService.init(BuildingDetailComponent, {building: building}, {});
    return building;
  }

  createbuilding(buildingType: string) {
    let newBuilding = new Building(this.buildings.buildings.length, buildingType);
    console.log(newBuilding);
    this.buildings.buildings.push(newBuilding);
  }
}
