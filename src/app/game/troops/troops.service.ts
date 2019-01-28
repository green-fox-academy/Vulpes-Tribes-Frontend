import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ENDPOINTS } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})

export class TroopsService {

  constructor(private http: HttpClient) {}

  getStats(): Observable<any> {
    let troops = [];
    let levels = {};
    let totalAttack = 0;
    let totalDefence = 0;
    let sustenance = 0;
    return new Observable<any>(observer => {
      if (localStorage.getItem('troops')) {
        troops = this.loadTroops();
      } else {
        this.getTroops().subscribe(response => {
          troops = response.body.troops;
          this.saveTroops(troops);
        })
      }
      levels = this.calculateTroopLevels(troops);
      totalAttack = this.countAttack(troops);
      totalDefence = this.countDefence(troops);
      sustenance = troops.length;
      observer.next({levels,totalAttack,totalDefence,sustenance});
      observer.complete();
    })
  }

  getTroops(): Observable<any> {
    return this.http.get(ENDPOINTS.getTroops, {observe: 'response'});
  }

  calculateTroopLevels (troops): any {
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
  }

  loadTroops(): [] {
    let troops: [];
    troops = JSON.parse(localStorage.getItem('troops'));
    return troops;
  }
}
