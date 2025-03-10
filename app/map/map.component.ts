import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ApiService } from '../assets/apiService';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map',
  imports: [RouterModule, HttpClientModule],
  templateUrl: './map.component.html',

  providers: [ApiService],
})
export class MapComponent implements OnInit {
  @Output() countrySelected = new EventEmitter<any>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (typeof document !== 'undefined'){
    const paths = document.querySelectorAll('#world-map path');
    paths.forEach((path: any) => {
      path.addEventListener('click', (event: any) => this.handleMapClick(event));
    });
  }
    
  }

  handleMapClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target && target instanceof SVGPathElement) {
      const countryName = target.getAttribute('id');
      if (countryName) {
        this.findCountryData(countryName);
      }
    }
  }

  findCountryData(countryName: string): void {
    this.apiService.getCountryInfo(countryName).subscribe((data) => {
      const countryData = data[1][0];

      this.countrySelected.emit({
        name: countryData.name,
        capitalCity: countryData.capitalCity,
        region: countryData.region.value,
        incomeLevel: countryData.incomeLevel.value,
        longitude: countryData.longitude,
        latitude: countryData.latitude,
      });
    });
  }
}
