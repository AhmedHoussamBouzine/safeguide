import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marrakech',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './marrakech.component.html',
  styleUrl: './marrakech.component.scss'
})
export class MarrakechComponent {
  categories = ["All", "Food", "Clothing", "Transportation", "Other"];

}
