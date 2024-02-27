import { Component } from '@angular/core';

@Component({
  selector: 'app-card-event',
  standalone: true,
  imports: [],
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.scss'
})
export class CardEventComponent {
  img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD59g1ep4AqL2z7gHZypfediA1e1ZFkJwYhklDO5N3uQ&'
  title1 = 'TANJAzz - Tangier'
  date1 = 'June , 2024'
  content1 = 'Quality jazz festival in late May featuring big names from the U.S. and France. Concerts at hotels like El Minzah. Typically held in early June.'

  img2 = 'https://www.cafonline.com/media/xpujem0o/afcon_2025.jpg'
  title2 = 'CAF'
  date2 ='2025'
  content2='Morocco is set to host the 35th edition of the Africa Cup of Nations.'

  img3='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYBRNit_RJtug6K3iAudlNwji_D1sGV2WzYZGF8tNug&s'
  title3 = 'FIFA World Cup'
  date3 = '2030'
  content3 = 'Morocco ,Spain and Portugal will jointly host the centennial 2030 FIFA World Cup, marking the 24th edition of the tournament.'

}
