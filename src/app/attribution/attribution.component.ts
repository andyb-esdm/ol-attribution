import { Component, inject } from '@angular/core';
import { MapService } from '../map.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attribution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribution.component.html',
  styleUrl: './attribution.component.scss'
})
export class AttributionComponent {
  private mapService = inject(MapService);

  attributions$ = this.mapService.attributions$;
}
