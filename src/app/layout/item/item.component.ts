import { Component } from '@angular/core';
import { StorageService } from '../../core/data/storage.service';
import { NotFoundComponent } from '../../shared/not-found/not-found.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NotFoundComponent, RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  constructor(private storage: StorageService) { }
  product: any;
  map: any;
  mapCenter = {
    latitude: 0,
    longitude: 0
  };
  ngOnInit() {
    this.product = this.storage.product;
    this.mapCenter = {
      latitude: this.product.location.lat,
      longitude: this.product.location.lon,
    };
  }
  locationChange(location: { latitude: number; longitude: number }) {
    this.product.location = {
      lat: location.latitude,
      lon: location.longitude,
    };
  }




}
