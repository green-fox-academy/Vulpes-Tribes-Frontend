import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  name = 'Testing';
  constructor(private _http: HttpClient) {
    this._http.get('https://api.myjson.com/bins/7xq2x1').subscribe(() => {
      console.log('Http Call is success from component');
    }, (error) => {
      console.log('Http Call is failed from component');
    });
  }
}

  ngOnInit(); {
  }
