import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-casablanca',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './casablanca.component.html',
  styleUrl: './casablanca.component.scss'
})
export class CasablancaComponent {
  categories = ["All", "Food", "Clothing", "Transportation", "Other"];


}
