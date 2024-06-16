import { Component, inject } from '@angular/core';
import { MapService } from '../map.service';
import { CommonModule } from '@angular/common';
import { NgbDropdown, NgbDropdownItem, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-attribution',
  standalone: true,
  imports: [CommonModule, NgbDropdown, NgbDropdownItem, NgbDropdownToggle, NgbDropdownMenu],
  templateUrl: './attribution.component.html',
  styleUrl: './attribution.component.scss'
})
export class AttributionComponent {
  private mapService = inject(MapService);

  attributions$ = this.mapService.attributions$;
}
