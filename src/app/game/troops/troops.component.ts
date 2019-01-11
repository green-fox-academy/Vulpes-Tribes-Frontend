import { Component, OnInit } from '@angular/core';
import { Troop } from '../../_models/troop.model';
import { Troops } from '../../_helpers/mock-troops';

@Component({
  selector: 'app-troops',
  templateUrl: './troops.component.html',
  styleUrls: ['./troops.component.css']
})
export class TroopsComponent implements OnInit {

  troops = Troops;
  selectedTroop: Troop;
  level1troops = 0;
  level2troops = 0;
  level3troops = 0;

  constructor() { }

  ngOnInit() {
    this.countLevel1(Troops);
  }

  onSelect(troop: Troop): void {
    this.selectedTroop = troop;
  }

  isLevel1(troop: Troop): void {
    if ([troop.level === 1]) {
      this.level1troops++;
    }
    // return troop.level === 1;
  }

  countLevel1(troops: Troop[]): void {
    for (let i = 0; i < troops.length; i++) {
      
    }
  }
  /*countLevel1(troops): number {
    if ([troops.find(this.isLevel1)]) {
    this.level1troops++;
    return this.level1troops;
    }
  }*/
}
