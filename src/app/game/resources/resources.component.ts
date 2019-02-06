import { Building } from './../../_models/building.model';
import { BuildingComponent } from './../buildings/building/building.component';
import { Resources } from './../../_models/resources.model';
import { Component, OnInit, Input } from '@angular/core';
import { ResourcesService } from './resources.service';
import { troops } from 'src/app/_helpers/mocks/mock-troops';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent implements OnInit {

  constructor(private resourceService: ResourcesService) {}

  food;
  money;
  // @Input() resourceValue: Resources;

  ngOnInit() {
    this.showResources();
    setInterval(this.resourceService.getResources, 300000);
  }

  showResources() {
    this.resourceService.getResources()
      .subscribe((response) => {
        this.food = response[0].amount;
        this.money = response[1].amount;
      });
  }
  // checkTroopsAndBulidingsCompletion(status: string){
  //   if(Building.status === 'finished' && troops.status === 'finished'){

  //   }
  // }
}
