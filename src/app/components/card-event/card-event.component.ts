import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.scss'
})

export class CardEventComponent {
  @Input() event: any = {};

}
