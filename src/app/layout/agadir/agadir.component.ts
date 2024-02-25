import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agadir',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './agadir.component.html',
  styleUrl: './agadir.component.scss'
})
export class AgadirComponent {
  categories = ["All", "Food", "Clothing", "Transportation", "Other"];


}
