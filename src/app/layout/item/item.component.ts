import { Component } from '@angular/core';
import { StorageService } from '../../core/data/storage.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  constructor(private storage:StorageService) { }
  product:any;
  ngOnInit() {
    this.product = this.storage.product;
  }

}
