import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderComponent } from '../loader/loader.component';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderComponent>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }
  show() {
    this.loaderSubject.next(<LoaderComponent>{ show: true });
  }
  hide() {
    this.loaderSubject.next(<LoaderComponent>{ show: false });
  }
}