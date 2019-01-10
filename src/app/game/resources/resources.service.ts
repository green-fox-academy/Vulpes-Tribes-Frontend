import { Observable } from 'rxjs';
import { Resources } from './../../_models/resources.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

    resourceInfo: Resources;

    constructor(private resourcesService: ResourcesService) { }

    getResources(): Observable<any> {
      return this.resourcesService.getResources();
    }
}
