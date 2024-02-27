import { Component } from '@angular/core';
import { CardEventComponent } from '../../components/card-event/card-event.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CardEventComponent,RouterLink,CommonModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {

}
