import { Injectable } from '@angular/core';
import { Map, View } from 'ol';
import { ViewStateLayerStateExtent } from 'ol/View';
import BaseEvent from 'ol/events/Event';
import TileLayer from 'ol/layer/Tile';
import RenderEvent from 'ol/render/Event';
import OSM, { ATTRIBUTION } from 'ol/source/OSM';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { defaults } from 'ol/control';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private readonly attributionsSubject = new BehaviorSubject<string[]>([]);
  attributions$ = this.attributionsSubject.asObservable();

  readonly map = new Map({
    controls: defaults({ attribution: false }),
    layers: [
      new TileLayer({
        source: new OSM({
          attributions: [
            'test additional attribution - by andyb',
            ATTRIBUTION
          ]
        }),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),

  });

  constructor() {
    fromEvent(this.map, 'postrender').subscribe((event: BaseEvent | Event) => {
      this.updateAttributions(event as RenderEvent);
    });

    // setTimeout(() => this.map.getAllLayers().forEach(layer => layer.setVisible(false)), 5000)
    // setTimeout(() => this.map.getAllLayers().forEach(layer => layer.setVisible(true)), 6000)
  }

  private updateAttributions(event: RenderEvent) {
    const frameState = event.frameState;
    if (frameState) {
      const visibleAttributions = Array.from(
        new Set(
          this.map
            .getAllLayers()
            .flatMap((layer) => layer.getAttributions(frameState as ViewStateLayerStateExtent))
        )
      );
      this.attributionsSubject.next(visibleAttributions);
    }
  }
}


