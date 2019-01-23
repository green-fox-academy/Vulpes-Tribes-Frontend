import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TroopsService {

  constructor(private http: HttpClient) {}

  getTroopsAndStats() {
    let troops = [];
    let levels = {};
    let totalAttack = 0;
    let totalDefence = 0;
    let sustenance = 0;
    this.getTroops().subscribe(response => {
      troops = response.body.troops;
      levels = this.setLevels(troops);
      totalAttack = this.countAttack(troops);
      totalDefence = this.countDefence(troops);
      sustenance = troops.length;
    });
    this.saveTroops(troops);
    console.log(JSON.stringify({levels,totalAttack,totalDefence,sustenance}));
    return {levels,totalAttack,totalDefence,sustenance};
  }

  getTroops(): Observable<any> {
    return this.http.get('/game/troops', {observe: 'response'});
  }

  setLevels (troops): any {
    let levels = {};
    troops.forEach(troop => levels[troop.level] ? levels[troop.level]++ : levels[troop.level] = 1);
    return levels;
  }

  countAttack (troops): number {
    let totalAttack = 0;
    troops.forEach(troop => {
      totalAttack += troop.attack;
    });
    return totalAttack;
  }

  countDefence (troops): number {
    let totalDefence = 0;
    troops.forEach(troop => {
      totalDefence += troop.defence;
    });
    return totalDefence;
  }

  saveTroops (troops) {
    localStorage.setItem('troops', JSON.stringify(troops));
    console.log(localStorage.getItem('troops'));
  }

  loadTroops(): [] {
    let troops: [];
    troops = JSON.parse(localStorage.getItem('troops'));
    return troops;
  }
}
