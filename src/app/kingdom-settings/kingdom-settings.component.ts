import { Component, OnInit } from '@angular/core';
import { KingdomSettingsService } from './kingdom-settings.service';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-settings',
  templateUrl: './kingdom-settings.component.html',
  styleUrls: ['./kingdom-settings.component.css'],
})
export class KingdomSettingsComponent implements OnInit {

  name;

  constructor(private settingsService: KingdomSettingsService, private loaderService: LoaderService ) { }
  private showLoader(): void {
    this.loaderService.show();
    setTimeout(()=>this.loaderService.hide(), 2000)
  }



  ngOnInit() {
    this.showSettings();
  }

  showSettings(): void {
    this.settingsService.getSettings().subscribe(response => (
      this.name = response.body.name));
  }
  updateSettings(name): void {
    this.showLoader();
    this.settingsService.updateSettings(name).subscribe(response => {
      console.log(response);
      this.name = response.body.name;
    });
  }

}
