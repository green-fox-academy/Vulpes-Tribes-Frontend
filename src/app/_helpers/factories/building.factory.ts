import { Building} from '../../_models/building.model';

export class BuildingFactory {

  constructor() {
  }

  createBuilding(id: number, type: string): Building {
    let newBuilding = new Building();
    newBuilding.id = id;
    console.log(type);
    if (type === 'mine') {
      newBuilding.type = 'mine';
    } else if (type === 'factory') {
      newBuilding.type = 'factory';
    } else {
      newBuilding.type = 'academy';
    }
    newBuilding.level = 1;
    newBuilding.hp = 100;
    newBuilding.started_at = Date.now();
    newBuilding.finished_at = Date.now() + 1000;
    return newBuilding;
  }
}
