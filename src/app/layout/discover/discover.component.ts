import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../core/data/storage.service';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [InputComponent, FormsModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent {
  constructor(private router: Router, private storage: StorageService) { }
  searchQuery = "";
  cities = [
    {
      name: "Fez",
      stadium: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Complexe_sportif_de_F%C3%A8s.jpg',
      stadiumDesc: 'The Fez Sports complex (Arabic: المركب الرياضي لفاس) is a multi-purpose stadium in Fez, Morocco. It is used mostly for football matches and it also has athletics facilities, the stadium holds 45,000 and was built in 2003.',
      images: [
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e6/ee/72.jpg',
        'https://i.natgeofe.com/n/f0823a24-c1f8-4c35-85b8-9c8afa25b0c4/dates-fez-morocco.jpg'
      ],
      image: "https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_top5/public/thumbnails/image/tanneries-medina-of-fez-morocco-wizard8492.jpg?itok=VYYh3Kpd",
      desc: "Embark on a captivating journey through time in the heart of Morocco. Fes weaves an intricate tapestry of ancient medinas, historic wonders, and the rich cultural heritage that defines this enchanting city."
    },
    {
      name: "Rabat",
      stadium: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Stade_Prince_Moulay_Abdellah.jpg',
      stadiumDesc: 'The Rabat Stadium, also known as the Prince Moulay Abdellah Stadium, is a multi-purpose stadium located in Rabat, Morocco. It is primarily used for football matches and serves as the home ground for the Moroccan national football team. The stadium has a seating capacity of around 52,000 spectators and is one of the largest stadiums in Morocco. It has hosted numerous international and domestic football events, including matches of the Moroccan league and national team fixtures. Additionally, it has also been used for other sporting events and concerts.',
      images: [
        'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_top5/public/thumbnails/image/tour-hassan-rabat-morocco-by-migel.jpg?itok=YP8GLwSi',
        'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider/public/thumbnails/image/rabat_1.jpg?itok=JF-8FRuT'
      ],
      image: "https://www.journalgeneraldeleurope.org/wp-content/uploads/2017/11/tour-hassan-rabat-maroc1.jpg",
      desc: "As the capital, Rabat gracefully balances tradition and modernity. Discover a regal city where historic monuments and contemporary vibes coexist in perfect harmony."
    },
    {
      name: "Casablanca",
      stadiumDesc: 'The Casablanca Stadium, officially known as the Stade Mohammed V, is a prominent multi-purpose stadium located in Casablanca, Morocco. Named after King Mohammed V of Morocco, the stadium is one of the largest and most historic sports venues in the country. It serves primarily as the home ground for the major football clubs in Casablanca, including Raja Casablanca and Wydad Casablanca, two of Morocco  most successful football teams. ',
      stadium: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Stade_Mohamed_V%2C_Casablanca.jpg',
      images: [
        'https://images.ctfassets.net/bth3mlrehms2/1TwENu0ZXSnwNu6GzVfVE4/fa1176816167c1a03589cd613458585d/Marokko_Casablanca_Hassan_II_Moschee.jpg?w=3864&h=2173&fl=progressive&q=50&fm=jpg',
        'https://www.maroc-hebdo.press.ma/files/2015/07/casa.jpg'
      ],
      image: "https://t3.ftcdn.net/jpg/02/67/20/10/360_F_267201056_wcEH6uQ6xu5oNHtY9Hq3YOhDwe1zk1XX.jpg",
      desc: "A vibrant fusion of historical charm and contemporary allure, where the echoes of the past harmonize with the dynamic pulse of modern life"
    },
    {
      name: "Tangier",
      stadiumDesc: 'The Tangier Stadium, officially known as the Stade Ibn Batouta, is a major multi-purpose stadium located in Tangier, Morocco. Named after the famous Moroccan explorer Ibn Battuta, the stadium is one of the key sporting venues in the region. It serves primarily as the home ground for the local football club, Ittihad Riadi Tanger (IRT).\n The stadium has a seating capacity of around 45,000 spectators and has hosted numerous football matches and other sporting events. It is also a popular venue for concerts and other entertainment events. ',
      stadium: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Stade_Ibn_Batuta%2C_Tanger.jpg',
      images: [
        'https://leseco.ma/wp-content/uploads/2021/01/Tanger.jpg',
        'https://static.verychic.com/images/45838/en/desktop/hotel_marina_bay_17.jpg'
      ],
      image: "https://leseco.ma/wp-content/uploads/2021/01/Tanger.jpg",
      desc: "Positioned at the crossroads of two worlds, Tangier captivates with its unique blend of cultures and landscapes, where the Atlantic Ocean meets the Mediterranean Sea, creating a mesmerizing coastal panorama."
    },
    {
      name: "Agadir",
      stadiumDesc: 'The Agadir Stadium, officially known as the Stade Adrar, is a prominent multi-purpose stadium located in Agadir, Morocco. It is one of the main sports venues in the city and serves primarily as the home ground for the local football club, Hassania Agadir. \n The Stade Adrar has a seating capacity of approximately 45,480 spectators. It has hosted various football matches, including domestic league games, cup competitions, and international fixtures. The stadium gained significant attention when it was one of the venues for the 2013 African Cup of Nations, where it hosted several matches during the tournament.',
      stadium: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Stade-Adrar2019.png',
      images: [
        'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider/public/thumbnails/image/AGADIR-%287%29.jpg?itok=ECYn9u_b',
        'https://content.r9cdn.net/rimg/dimg/c0/3e/fc7d0d0d-city-35407-1650ff6f41f.jpg?width=1366&height=768&xhint=1569&yhint=1017&crop=true',
        'https://cdn.getyourguide.com/img/tour/641e3943917fc.jpeg/145.jpg'
      ],
      image: "https://www.konouzimmobilier.com/wp-content/uploads/2019/12/951338247a403ff4a6be66bfe0f2e875.jpg",
      desc: "Nestled along golden shores, Agadir invites you to bask in the serenity of its beaches, offering a perfect blend of leisure and the gentle rhythm of coastal living."
    },
    {
      name: "Marrakech",
      stadiumDesc: 'The Marrakech Stadium, officially known as the Stade de Marrakech, is a notable multi-purpose stadium located in Marrakech, Morocco. It is one of the primary sports venues in Marrakech and serves as the home ground for the local football club, Kawkab Marrakech. \n The Stade de Marrakech has a seating capacity of approximately 45,240 spectators. It has hosted numerous football matches, including domestic league games, cup competitions, and international fixtures. The stadium gained international attention when it was one of the venues for the 2014 FIFA Club World Cup, where several matches of the tournament took place at this venue.',
      stadium: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Stade_de_marrakech.jpg',
      images: [
        'https://www.marrakech-cityguide.com/wp-content/uploads/Marrakech-place-koutoubia-e1609154215571.jpg',
        'https://www.clickexcursions.com/storage/excursions/June2022/9JVxSePAHAAf7SruQMH1.jpg'
      ],
      image: "https://fr.le360.ma/resizer/DWDGhyK5loODx8BUzM-7LvcUWOU=/1216x684/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/le360/YZ7TV6HGPJB5JGSGMFQLVUXXXU.jpeg",
      desc: "A jewel in the south, Marrakech invites you to wander through vibrant souks, explore majestic palaces, and immerse yourself in the allure of a city where tradition dances with the rhythms of modern life."
    }
  ];

  showDetails(city: any) {
    this.storage.city = city;
    console.log(city);
    this.router.navigate([`/${city.name}/infos`]);


  }

}
