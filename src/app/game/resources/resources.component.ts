import { TroopsService } from "./../troops/troops.service";
import { Component, OnInit } from "@angular/core";
import { ResourcesService } from "./resources.service";
import { BuildingsService } from "./../buildings/buildings.service";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.css"]
})
export class ResourcesComponent implements OnInit {
  constructor(
    private resourceService: ResourcesService,
    private buildingService: BuildingsService,
    private troopsService: TroopsService) {

  }

  food;
  gold;
  foodgeneration;
  moneygeneration;

  ngOnInit() {
    this.showResources();
    setInterval(() => this.updateResources(), 1000);
    setInterval(() => this.resourceService.getResources, 300000);
  }

  showResources() {
    this.resourceService.getResources().subscribe(response => {
      this.food = response[0].amount;
      this.gold = response[1].amount;
      this.foodgeneration = response[0].generation;
      this.moneygeneration = response[1].generation;
    });
  }

  updateResources() {
    const generateFood = this.getFoodGeneration();
    const generatedGold = this.getGoldGeneration();
    const troopSustenance = this.getSustenaceOfTroops();
    this.food += generateFood - troopSustenance;
    this.gold += generatedGold;
  }

  getGoldGeneration() {
    let goldGeneration: number = 0;
    if (this.buildingService.loadBuildingsFromLS() !== null) {
      const buildingsFromLS = this.buildingService.loadBuildingsFromLS();
      const completedMines = buildingsFromLS.filter(
        building => building.finishedAt <= Date.now() && building.type === 'mine',
      );
      goldGeneration = completedMines.length;
    }
    return goldGeneration;
  }

  getSustenaceOfTroops() {
    let numberOfFinishedTroops: number = 0;
    if (this.troopsService.loadTroopsFromLS() !== null) {
      const troops = this.troopsService.loadTroopsFromLS();
      const finishedTroops = troops.filter(troop => troop.finishedAt <= Date.now());
      numberOfFinishedTroops = finishedTroops.length;
    }
    return numberOfFinishedTroops;
  }

  getFoodGeneration() {
    let foodGeneration: number = 0;
    if (this.buildingService.loadBuildingsFromLS() !== null) {
      const buildingsFromLS = this.buildingService.loadBuildingsFromLS();
      const completedFarms = buildingsFromLS.filter(
        farm => farm.finishedAt <= Date.now() && farm.type === 'farm',
      );
      foodGeneration = completedFarms.length;
    }
    return foodGeneration;
  }
}
