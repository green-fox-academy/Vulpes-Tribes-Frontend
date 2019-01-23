import { Component, OnInit } from '@angular/core';
import { ResourcesService } from './resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent implements OnInit {
  constructor(private resourceService: ResourcesService) {}
  food;
  money;

<<<<<<< HEAD
  ngOnInit() {
    this.showResources();
  }

  showResources() {
    this.resourceService
      .getResources()
      .subscribe(response => {
        this.food = response.resources[0].amount;
        this.money = response.resources[1].amount;
      });
=======
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://api.myjson.com/bins/7xq2x1').subscribe(() => {
      console.log('Http Call is success from component');
    },                                                            (error) => {
      console.log('Http Call is failed from component');
    });
>>>>>>> 17f90ece5b40c323caf080b179a30b6c1f68c34d
  }
}
