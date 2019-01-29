import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/environments/endpoints';
import { Troop } from 'src/app/_models/troop.model';

@Injectable({
  providedIn: 'root'
})

export class TroopsService {

  constructor(private http: HttpClient) {}

  getTroops(): Observable<Troop[]> {
    let troops: Troop[];
    return new Observable<Troop[]>(observer => {
      if (localStorage.getItem('troops')) {
        troops = this.loadTroopsFromLS();
      } else {
        this.getTroopsFromBackEnd().subscribe(response => {
          troops = response.body.troops;
          this.saveTroopsToLS(troops);
        })
      }
      observer.next(troops);
      observer.complete();
    })
  }
  
  getStats(): Observable<any> {
    let levels = {};
    let totalAttack = 0;
    let totalDefence = 0;
    let sustenance = 0;
    return new Observable<any>(observer => {
      this.getTroops().subscribe(response => {
        levels = this.calculateTroopLevels(response);
        totalAttack = this.countAttack(response);
        totalDefence = this.countDefence(response);
        sustenance = response.length;
        observer.next({levels, totalAttack, totalDefence, sustenance});
        observer.complete();
      })
    })
  }

  getTroopsFromBackEnd(): Observable<any> {
    return this.http.get(ENDPOINTS.getTroops, {observe: 'response'});
  }

  saveTroopsToLS (troops) {
    localStorage.setItem('troops', JSON.stringify(troops));
  }

  loadTroopsFromLS(): Troop[] {
    let troops: Troop[];
    troops = JSON.parse(localStorage.getItem('troops'));
    return troops;
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

  updateTroopsInLS (troop) {
    let troops = this.loadTroopsFromLS();
    troops.push(troop);
    this.saveTroopsToLS(troops);
  }

  postTroops(): Observable<any> {
    return this.http.post(ENDPOINTS.getTroops, '', {observe: 'response'});
  }

  createTroop(): Observable<any> {
    let troop: Troop;
    return new Observable<any>(observer => {
      this.postTroops()
      .subscribe(response => {
        troop = response.body.troop;
        this.updateTroopsInLS(troop);
        observer.complete();
      });
    })
  }

  filterTroops(status: string): Observable<Troop[]> {
    return new Observable<Troop[]>(observer => {
      this.getTroops().subscribe(response => {
        if (status === 'finished') {
          observer.next(response.filter(troop => troop.finishedAt <= Date.now()));
        } else if (status === 'unfinished') {
          observer.next(response.filter(troop => troop.finishedAt > Date.now()));
        }
        observer.complete();
      })
    })
  }
}
