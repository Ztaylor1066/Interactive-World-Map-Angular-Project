import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-map-data',
  imports: [],
  templateUrl: './map-data.component.html',
  
})
export class MapDataComponent {
  @Input() countryName: string = '';
  @Input() capitalCity: string = '';
  @Input() region: string = '';
  @Input() incomeLevel: string = '';
  @Input() longitude: string = '';
  @Input() latitude: string = '';


}
