import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryTokenService implements InMemoryDbService {
  createDb() {
    const login: Object[] = [
      {
        id: 1,
        tribes_token: '56987'
      }
    ];
    return {'/login' : login};
  }



}
