import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tangier',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tangier.component.html',
  styleUrl: './tangier.component.scss'
})
export class TangierComponent {
  categories = ["All", "Food", "Clothing", "Transportation", "Other"];

}
