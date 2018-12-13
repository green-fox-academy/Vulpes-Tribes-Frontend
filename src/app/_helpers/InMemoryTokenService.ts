import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryTokenService implements InMemoryDbService {
  createDb() {
    const token = [
      {
        id: 1,
        token: '123456'
      }
    ];
    return {'login' : token};
  }

  checkToken() {
    return (localStorage.getItem('token'));
  }

  saveToken() {
    localStorage.setItem('token', '123456');
  }
}
