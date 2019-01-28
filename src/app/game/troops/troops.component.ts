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
    this.getStats();
  }

  getStats() {
    this.troopsService.getStats().subscribe(response => {
      this.levels = response.levels;
      this.totalAttack = response.totalAttack;
      this.totalDefence = response.totalDefence;
      this.sustenance = response.sustenance;
    })
  }

  checkLevels() {
    const keys = Object.keys(this.levels);
    return keys.length > 0;
 }
}
