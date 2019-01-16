import { Component, OnInit } from '@angular/core';
import { TroopsService } from './troops.service';

@Component({
  selector: 'app-troops',
  templateUrl: './troops.component.html',
  styleUrls: ['./troops.component.css']
})
export class TroopsComponent implements OnInit {

  troops = [];
  levels = [0, 0, 0];
  totalAttack = 0;
  totalDefence = 0;
  totalSustenance = '???';

  constructor(private troopsService: TroopsService) { }

  ngOnInit() {
    this.troopsService.getTroops()
    .subscribe(response => {
      this.troops = response.body.troops;
      console.log(this.troops);
    });
    this.setLevelArray(this.troops);
    this.countAttack(this.troops);
    this.countDefence(this.troops);
  }

  setLevelArray (troops): void {
    troops.forEach(troop => {
      if (troop.level === 1) {
        this.levels[0]++;
      } else if (troop.level === 2) {
        this.levels[1]++;
      } else if (troop.level === 3) {
        this.levels[2]++;
      }
    });
  }

  countAttack (troops): void {
    troops.forEach(troop => {
      this.totalAttack += troop.attack;
    });
  }

  countDefence (troops): void {
    troops.forEach(troop => {
      this.totalDefence += troop.defence;
    });
  }
}
