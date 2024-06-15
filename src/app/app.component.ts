import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { AttributionComponent } from './attribution/attribution.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapComponent, AttributionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
