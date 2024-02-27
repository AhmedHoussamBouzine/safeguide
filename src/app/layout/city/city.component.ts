import { Component } from '@angular/core';
import { StorageService } from '../../core/data/storage.service';
import { NotFoundComponent } from '../../shared/not-found/not-found.component';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [NotFoundComponent],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss'
})
export class CityComponent {
  constructor(private storage: StorageService) { }
  city: any;
  activeImage = 0;

  ngOnInit() {
    this.city = this.storage.city;
  }


}
