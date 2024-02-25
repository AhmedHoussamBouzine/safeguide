import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { Layer, MapOptions, icon, latLng, marker, tileLayer } from "leaflet";

type Location = { latitude: number; longitude: number };

@Component({
  selector: "app-map",
  standalone: true,
  imports: [LeafletModule],
  templateUrl: "./map.component.html",
})
export class MapComponent implements OnInit {
  @Output() locationChange = new EventEmitter<Location>();

  @Input() location: Location | null = null;
  @Input() center: Location = { latitude: 0, longitude: 0 };
  @Input() zoom = 5;
  @Input() readonly = false;

  options: MapOptions = {
    layers: [
      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }),
    ],
    zoom: this.zoom,
  };

  layers: Layer[] = [];

  ngOnInit(): void {
    if (this.location) {
      this.layers = [this.createMarker(this.location)];
    }

    this.options.center = latLng(this.center.latitude, this.center.longitude);
  }

  onMapClick(event: any): void {
    if (this.readonly) return;

    const { lat, lng } = event.latlng;
    this.locationChange.emit({ latitude: lat, longitude: lng });
    this.layers = [this.createMarker({ latitude: lat, longitude: lng })];
  }

  createMarker(location: Location): Layer {
    return marker([location.latitude, location.longitude], {
      icon: icon({
        iconUrl: "/assets/marker-icon.png",
        iconAnchor: [19, 35],
      }),
    });
  }
}
