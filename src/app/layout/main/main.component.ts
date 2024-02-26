import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,ChatComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
