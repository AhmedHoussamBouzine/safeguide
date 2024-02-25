import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fez',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fez.component.html',
  styleUrl: './fez.component.scss'
})
export class FezComponent {
  categories = ["All", "Food", "Clothing", "Transportation", "Other"];


}
