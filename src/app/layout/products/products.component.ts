import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InputComponent } from '../../components/input/input.component';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, InputComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  searchQuery = "";
  products: any = []
  city = "";
  category = "";
  constructor(private route: ActivatedRoute, private data: DataService) { }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.city = params['city'];
      this.category = params['category'];
    });
    if (this.category != "") {
      await this.data.getitemsByCity(this.city).then((items) => {
        this.products = items;
      });
    } else {
      this.data.getItemsByCityAndCategory(this.city, this.category).then((items) => {
        this.products = items;
      })
    }
  }
}
