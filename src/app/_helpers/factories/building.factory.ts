import { Building } from '../../_models/building.model';
import { CONSTANTS } from '../../../environments/constants';

export class BuildingFactory {

  constructor() {
  }

  createBuilding(id: number, type: string): Building {
    const newBuilding = new Building();
    newBuilding.id = id;
    newBuilding.type = type;
    newBuilding.level = 1;
    newBuilding.hp = 100;
    newBuilding.startedAt = Date.now();
    newBuilding.finishedAt = Date.now() + CONSTANTS.BarracksBuildingTime;
    return newBuilding;
  }
}
