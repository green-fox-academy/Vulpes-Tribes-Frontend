import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryUsersService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 123,
        username: 'adam',
        kingdom_id: 222,
        avatar: 'http://avatar.loc/my.png',
        points: 0
      },      {
        id: 124,
        username: 'Honza',
        kingdom_id: 333,
        avatar: 'http://avatar.loc/my.png',
        points: 50
      },
    ];
    return {users};
  }
}
