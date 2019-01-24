import { Component, OnInit } from '@angular/core';
import { ResourcesService } from './resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent implements OnInit {
  constructor(private resourceService: ResourcesService) {}
  food;
  money;

  ngOnInit() {
    this.showResources();
  }

  showResources() {
    this.resourceService
      .getResources()
      .subscribe(response => {
        this.food = response.resources[0].amount;
        this.money = response.resources[1].amount;
      });
  }
}
