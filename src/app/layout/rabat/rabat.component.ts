import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rabat',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rabat.component.html',
  styleUrl: './rabat.component.scss'
})
export class RabatComponent {
  categories = ["All", "Food", "Clothing", "Transportation", "Other"];

}
