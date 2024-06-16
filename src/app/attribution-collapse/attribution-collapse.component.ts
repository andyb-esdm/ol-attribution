import { Component, inject } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MapService } from '../map.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attribution-collapse',
  standalone: true,
  imports: [CommonModule, NgbCollapseModule],
  templateUrl: './attribution-collapse.component.html',
  styleUrl: './attribution-collapse.component.scss'
})
export class AttributionCollapseComponent {
  private mapService = inject(MapService);

  attributions$ = this.mapService.attributions$;
  isCollapsed = false;
}
