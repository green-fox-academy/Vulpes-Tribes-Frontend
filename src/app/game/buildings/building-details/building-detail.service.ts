import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildingDetailService {

  constructor(private http: HttpClient) { }

  loadBuilding() {

  }

}
