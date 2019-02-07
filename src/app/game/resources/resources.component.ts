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
    this.generationGenerator();
    this.getFinishedBulidings();
    this.getCompletedTroops();
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
    this.food += this.foodgeneration;
    this.money += this.moneygeneration;
  }

  getFinishedBulidings() {
    this.buildingService.loadFinishedBuildingsFromLS;
  }

  getCompletedTroops() {
    this.troopsService.loadTroopsFromLS;
    console.log(this.troopsService.loadTroopsFromLS());
  }
}
