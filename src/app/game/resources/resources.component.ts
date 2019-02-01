import { Component, OnInit } from '@angular/core';
import { ResourcesService } from './resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent implements OnInit {
  constructor(private resourceService: ResourcesService) {}
  food = 500;
  money = 340;

  ngOnInit() {
    // this.showResources();
    setInterval(() =>
    (Date.now() <= this.food.finishedAt) ?
    this.food
  }

  // showResources() {
  //   this.resourceService.getResources()
  //     .subscribe((response) => {
  //       this.food = response[0].amount;
  //       this.money = response[1].amount;
  //     });
  }


