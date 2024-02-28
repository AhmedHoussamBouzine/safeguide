import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.scss'
})

export class CardEventComponent {
  events = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD59g1ep4AqL2z7gHZypfediA1e1ZFkJwYhklDO5N3uQ&',
      title: 'TANJAzz - Tangier',
      date: 'June, 2024',
      content: 'Quality jazz festival in late May featuring big names from the U.S. and France. Concerts at hotels like El Minzah. Typically held in early June.'
    },
    {
      img: 'https://www.cafonline.com/media/xpujem0o/afcon_2025.jpg',
      title: 'CAF',
      date: '2025',
      content: 'Morocco is set to host the 35th edition of the Africa Cup of Nations.'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYBRNit_RJtug6K3iAudlNwji_D1sGV2WzYZGF8tNug&s',
      title: 'FIFA World Cup',
      date: '2030',
      content: 'Morocco ,Spain and Portugal will jointly host the centennial 2030 FIFA World Cup, marking the 24th edition of the tournament.'
    }
  ];
}
