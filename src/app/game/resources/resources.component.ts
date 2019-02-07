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
    private troopsService: TroopsService
  ) {}

  food;
  money;
  foodgeneration;
  moneygeneration;

  ngOnInit() {
    this.showResources();
    setInterval(() => this.generationGenerator(), 1000);
    setInterval(() => this.resourceService.getResources, 300000);
  }

  showResources() {
    this.resourceService.getResources().subscribe(response => {
      this.food = response[0].amount;
      this.money = response[1].amount;
      this.foodgeneration = response[0].generation;
      this.moneygeneration = response[1].generation;
    });
  }

  generationGenerator() {
    let generateFood = this.getFoodGeneration();
    let generatedGold = this.getGoldGeneration();
    let troopSustenance = this.getSustenaceOfTroops();
    this.food += generateFood - troopSustenance;
    this.money += generatedGold;
  }

  getGoldGeneration() {
    const completedMines = this.buildingService.loadFinishedBuildingsFromLS();
    let filteringMinesFromBuildings = completedMines.filter(
      building => building.finishedAt <= Date.now() && building.type === "mine"
    );
    let numberofCompletedMines = filteringMinesFromBuildings.length;
    return numberofCompletedMines;
  }

  getSustenaceOfTroops() {
    const fetchedTroops = this.troopsService.loadTroopsFromLS();
    let finishedTroops = fetchedTroops.filter(
      troop => troop.finishedAt <= Date.now()
    );
    let numberOfFinishedTroops = finishedTroops.length;
    return numberOfFinishedTroops;
  }

  getFoodGeneration() {
    const completedFarms = this.buildingService.loadFinishedBuildingsFromLS();
    let filterFarmsFromBuildings = completedFarms.filter(
      farm => farm.finishedAt <= Date.now() && farm.type === "farm"
    );
    let numberOfCompletedFarms = filterFarmsFromBuildings.length;
    return numberOfCompletedFarms;
  }
}
