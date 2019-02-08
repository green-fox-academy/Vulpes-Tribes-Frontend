import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Building } from '../../../_models/building.model';
import { BuildingDetailService } from './building-detail.service';
import { AlertService } from '../../../alert/alert.service';
import { TroopsService } from '../../troops/troops.service';
import { BuildingsService } from '../buildings.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from '../../../sharedServices/notifications.service';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css'],
})
export class BuildingDetailComponent implements OnInit {

  @Input() building: Building;
  @Input() imgSrc: string;

  @Output() deselectBuilding = new EventEmitter();

  constructor(private buildingsService: BuildingsService,
              private route: ActivatedRoute,
              private buildingDetailService: BuildingDetailService,
              private notificationService: NotificationsService,
              private alertService: AlertService,
              private troopsService: TroopsService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('buildingid');
    this.building = this.buildingsService.getBuildingById(id);
    this.imgSrc = `/assets/images/buildings/${ this.building.type }.svg`;
    this.townhallLevel();
  }

  destroy() {
    this.deselectBuilding.emit();
  }

  createTroop() {
    this.troopsService.createTroop().subscribe((response) => {
      this.notificationService.createNotification('Training', 'troop', response.startedAt, response.finishedAt, response.level);
    });
  }

  levelUpBuilding(building: Building) {
    this.buildingDetailService.levelUpBuilding(building)
      .subscribe((response) => {
        setTimeout(() => {
          this.building.level = response.body.level;
          this.alertService.success('Building leveled up');
        },         response.finishedAt - response.startedAt);

      });
  }

  townhallLevel(): number {
    return this.buildingsService.getHighestLevelOfSpecificBuilding('townhall');
  }
}
