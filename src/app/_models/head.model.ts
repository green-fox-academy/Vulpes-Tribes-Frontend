import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem(environment.tribes_token),
  }),
};

export class CustomHeaders {

}
