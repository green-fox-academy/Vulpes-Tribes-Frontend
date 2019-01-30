import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResourcesService } from './resources.service';
import { TribesNotification } from '../../_models/notification.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent implements OnInit {

  @Output() checkResources = new EventEmitter<TribesNotification>();

  constructor(private resourceService: ResourcesService) {}
  food;
  money;

  ngOnInit() {
    this.showResources();
  }

  showResources() {
    this.resourceService.getResources()
      .subscribe((response) => {
        this.food = response[0].amount;
        this.money = response[1].amount;
      });
  }
}
