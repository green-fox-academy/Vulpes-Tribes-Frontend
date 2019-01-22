import { Component, OnInit } from '@angular/core';
import { TroopsService } from './troops.service';

@Component({
  selector: 'app-troops',
  templateUrl: './troops.component.html',
  styleUrls: ['./troops.component.css']
})
export class TroopsComponent implements OnInit {

  levels: Object;
  totalAttack: number;
  totalDefence: number;
  sustenance: number;

  constructor(private troopsService: TroopsService) { }

  ngOnInit() {
    let values =  this.troopsService.run();
    this.levels = values.levels;
    this.totalAttack = values.totalAttack;
    this.totalDefence = values.totalDefence
    this.sustenance = values.sustenance;
  }

  checkLevels() {
    let keys = Object.keys(this.levels);
    return keys.length > 0;
 }
}
