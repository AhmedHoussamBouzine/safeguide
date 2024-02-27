import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../components/input/input.component';
import { DataService } from '../../core/services/data.service';
import { StorageService } from '../../core/data/storage.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, InputComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  searchQuery = "";
  products: any = []
  constructor(private route: ActivatedRoute, private data: DataService,private router:Router,private storage:StorageService) { }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      const city = params['city'];
      const category = params['category'];
      if (category != "" && city != "") {
        this.data.getItemsByCityAndCategory(city, category).then((items) => {
          this.products = items;
        });
      } else if (city != "" || category == "All") {
        this.data.getitemsByCity(city).then((items) => {
          this.products = items;
        });
      } else {
        this.data.getitemsByCity(city).then((items) => {
          this.products = items;
        })
      }
    });

  }
  displayItem(product: any) {
    this.storage.product = product;
    this.router.navigate(['/item']);
    console.log(product);
  }
}
