import { Resources } from '../../_models/resources.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService implements Resources {
  amount: number;
  type: string;
  generation: number;
  mockDb() {
    const resources = [
      this.type = 'food',
      this.amount = 500,
      this.generation = 0,
    ];
  }
  constructor() { }
}
