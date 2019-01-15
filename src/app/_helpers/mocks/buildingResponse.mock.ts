import { Building } from '../../_models/building.model';
import { OnInit } from '@angular/core';
import { BuildingFactory } from '../factories/building.factory';

const buildings = [
  {
    id: 123,
    type: 'townhall',
    level: 1,
    hp: 100,
    started_at: 1231232312,
    finished_at: 7652146122,
  },
  {
    id: 124,
    type: 'academy',
    level: 1,
    hp: 100,
    started_at: 1231232312,
    finished_at: 7652146122,
  },
  {
    id: 125,
    type: 'factory',
    level: 1,
    hp: 100,
    started_at: 1231232312,
    finished_at: 7652146122,
  },
  {
    id: 126,
    type: 'mine',
    level: 1,
    hp: 100,
    started_at: 1231232312,
    finished_at: 7652146122,
  },
];

export class BuildingResponseMock implements OnInit {

  buildings;

  constructor() {
    this.buildings = buildings;
  }

  ngOnInit() {}

  updateBuilding(building: Building) {
    this.buildings[this.buildings.indexOf(building)] = this.findBuilding(building.id);
  }

  createBuilding(type: string): Building {
    const newBuilding = new BuildingFactory().createBuilding(this.buildings.length, type);
    buildings.push(newBuilding);
    return newBuilding;
  }

  findBuilding(buildingId: number): Building {
    return buildings.filter(building => building.id === buildingId)[0];
  }
}
