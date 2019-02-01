import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/environments/endpoints';
import { Troop } from 'src/app/_models/troop.model';

const URL = environment.serverApi + ENDPOINTS.getTroops;

@Injectable({
  providedIn: 'root',
})

export class TroopsService {

  constructor(private http: HttpClient) {
  }

  getTroops(): Observable<Troop[]> {
    return new Observable<Troop[]>((observer) => {
      let troops: Troop[];
      if (localStorage.getItem('troops')) {
        troops = this.loadTroopsFromLS();
        observer.next(troops);
      }
      this.getTroopsFromBackEnd().subscribe((response) => {
        troops = response.body.troops;
        this.saveTroopsToLS(troops);
        observer.next(troops);
        observer.complete();
      });
    });
  }

  filterTroopsByCompletion(status: string): Observable<Troop[]> {
    return new Observable<Troop[]>((observer) => {
      this.getTroops().subscribe((response) => {
        if (status === 'finished') {
          observer.next(response.filter(troop => troop.finishedAt <= Date.now()));
        } else if (status === 'unfinished') {
          observer.next(response.filter(troop => troop.finishedAt > Date.now()));
        }
        observer.complete();
      });
    });
  }

  getStats(): Observable<any> {
    let levels = {};
    let totalAttack = 0;
    let totalDefence = 0;
    let sustenance = 0;
    return new Observable<any>((observer) => {
      this.filterTroopsByCompletion('finished').subscribe((troops) => {
        levels = this.calculateTroopLevels(troops);
        totalAttack = this.countAttack(troops);
        totalDefence = this.countDefence(troops);
        sustenance = troops.length;
        observer.next({ levels, totalAttack, totalDefence, sustenance });
        observer.complete();
      });
    });
  }

  getTroopsFromBackEnd(): Observable<any> {
    return this.http.get(URL, { observe: 'response' });
  }

  postTroop(): Observable<any> {
    return this.http.post(URL, '', { observe: 'response' });
  }

  saveTroopsToLS(troops) {
    localStorage.setItem('troops', JSON.stringify(troops));
  }

  loadTroopsFromLS(): Troop[] {
    let troops: Troop[];
    troops = JSON.parse(localStorage.getItem('troops'));
    return troops;
  }

  addTroopsInLS(troop) {
    const troops = this.loadTroopsFromLS();
    troops.push(troop);
    this.saveTroopsToLS(troops);
  }

  calculateTroopLevels(troops: Troop[]): {} {
    const levels = {};
    troops.forEach((troop) => {
      levels[troop.level] ? levels[troop.level] += 1 : levels[troop.level] = 1;
    });
    return levels;
  }

  countAttack(troops): number {
    let totalAttack = 0;
    troops.forEach((troop) => {
      totalAttack += troop.attack;
    });
    return totalAttack;
  }

  countDefence(troops): number {
    let totalDefence = 0;
    troops.forEach((troop) => {
      totalDefence += troop.defence;
    });
    return totalDefence;
  }

  createTroop(): Observable<any> {
    let troop: Troop;
    return new Observable<any>((observer) => {
      this.postTroop()
        .subscribe((response) => {
          troop = response.body.troop;
          this.addTroopsInLS(troop);
          observer.complete();
        });
    });
  }
}
