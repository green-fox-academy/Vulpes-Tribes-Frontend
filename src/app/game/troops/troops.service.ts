import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TroopsService {

  constructor(private http: HttpClient) {}

  run() {
    let troops: [];
    let levels: {};
    let totalAttack: number;
    let totalDefence: number;
    let sustenance: number;
    this.getTroops().subscribe(response => {
      troops = response.body.troops;
      levels = this.setLevels(troops);
      totalAttack = this.countAttack(troops);
      totalDefence = this.countDefence(troops);
      sustenance = troops.length;
    });
      return {levels,totalAttack,totalDefence,sustenance};
  }

  getTroops(): Observable<any> {
    return this.http.get('/game/troops', {observe: 'response'});
  }

  setLevels (troops): any{
    let levels = {};
    troops.forEach(troop => levels[troop.level] ? levels[troop.level]++ : levels[troop.level] = 1);
    return levels;
  }

  countAttack (troops): number {
    let x = 0;
    troops.forEach(troop => {
      x += troop.attack;
    });
    return x;
  }

  countDefence (troops): number {
    let x = 0;
    troops.forEach(troop => {
      x += troop.defence;
    });
    return x;
  }
}
