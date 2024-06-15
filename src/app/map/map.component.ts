import { Component, OnInit, inject } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  private mapService = inject(MapService);
  private map = this.mapService.map;

  ngOnInit() {
    this.map.setTarget('map');
  }

}
