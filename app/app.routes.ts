import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
    {path: 'home', title: 'Home Page', component: MapComponent },
    {path: '', title: 'Home Page', component: MapComponent}
];
