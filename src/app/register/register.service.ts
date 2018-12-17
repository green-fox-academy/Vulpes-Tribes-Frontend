import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  createUser(user) {
      this.http.post('/register', user)
        .subscribe(
          response => {
            console.log(response);
          }
        );
  }
}
