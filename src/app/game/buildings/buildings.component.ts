import {Component, OnInit, Output} from '@angular/core';
import {BuildingsService} from './buildings.service';
import {BuildingDetailComponent} from './building-details/building-detail.component';
import {ModalService} from './building-details/modal.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Building} from '../../_models/building.model';

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

    for (let i = 0; i < this.buildings.length; i++) {
      this.buildingComponents.push(this.buildings[i]);
    }
    console.log('Buildings components' + this.buildingComponents);
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

  // createbuilding(buildingType: string) {
  //   let lastId = this.findBuilding(this.buildings.buildings.length - 1).id;
  //   let newBuilding = new Building();
  //   newBuilding.id = lastId + 1;
  //   if (buildingType === 'mine') {
  //     newBuilding.type = 'mine';
  //   }
  //     this.buildingComponents.push(new Building())
  //   }
  // }

}
