import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [InputComponent,FormsModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent {
  searchQuery = "";
  cities = [
    { id: 1, name: "Fez", image: "https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_top5/public/thumbnails/image/tanneries-medina-of-fez-morocco-wizard8492.jpg?itok=VYYh3Kpd", desc: " Embark on a captivating journey through time in the heart of Morocco. Fes weaves an intricate tapestry of ancient medinas, historic wonders, and the rich cultural heritage that defines this enchanting city." },
    { id: 2, name: "Rabat", image: "https://www.journalgeneraldeleurope.org/wp-content/uploads/2017/11/tour-hassan-rabat-maroc1.jpg", desc: "As the capital, Rabat gracefully balances tradition and modernity. Discover a regal city where historic monuments and contemporary vibes coexist in perfect harmony. " },
    { id: 3, name: "Casablanca", image: "https://t3.ftcdn.net/jpg/02/67/20/10/360_F_267201056_wcEH6uQ6xu5oNHtY9Hq3YOhDwe1zk1XX.jpg", desc: "A vibrant fusion of historical charm and contemporary allure, where the echoes of the past harmonize with the dynamic pulse of modern life" },
    { id: 4, name: "Tangier", image: "https://leseco.ma/wp-content/uploads/2021/01/Tanger.jpg", desc: "Positioned at the crossroads of two worlds, Tangier captivates with its unique blend of cultures and landscapes, where the Atlantic Ocean meets the Mediterranean Sea, creating a mesmerizing coastal panorama." },
    { id: 5, name: "Agadir", image: "https://www.konouzimmobilier.com/wp-content/uploads/2019/12/951338247a403ff4a6be66bfe0f2e875.jpg", desc: " Nestled along golden shores, Agadir invites you to bask in the serenity of its beaches, offering a perfect blend of leisure and the gentle rhythm of coastal living." },
    { id: 6, name: "Marrakech", image: "https://fr.le360.ma/resizer/DWDGhyK5loODx8BUzM-7LvcUWOU=/1216x684/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/le360/YZ7TV6HGPJB5JGSGMFQLVUXXXU.jpeg", desc: "A jewel in the south, Marrakech invites you to wander through vibrant souks, explore majestic palaces, and immerse yourself in the allure of a city where tradition dances with the rhythms of modern life." },
  ]

}
