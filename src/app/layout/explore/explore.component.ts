import { Component } from '@angular/core';
import { CardEventComponent } from '../../components/card-event/card-event.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CardEventComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {
  
}
