import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryTokenService implements InMemoryDbService {
  createDb() {
    let token = [
      {
        token: '123456'
      }
    ];
    return {'game' : token};
  }

  isLoggedIn() {
    return true;
  }
}
