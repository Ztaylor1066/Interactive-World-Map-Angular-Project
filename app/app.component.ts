import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { MapDataComponent } from './map-data/map-data.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MapComponent, MapDataComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'world-map';

  countryName: string = '';
  capitalCity: string = '';
  region: string = '';
  incomeLevel: string = '';
  longitude: string = '';
  latitude: string = '';

  onCountrySelected(countryData: any): void {
    console.log('Country Data:', countryData);
    this.countryName = countryData.name;
    this.capitalCity = countryData.capitalCity;
    this.region = countryData.region;
    this.incomeLevel = countryData.incomeLevel;
    this.longitude = countryData.longitude;
    this.latitude = countryData.latitude;
  }
}
