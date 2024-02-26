import { Component, inject } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FormsModule } from '@angular/forms';
import { Timestamp } from 'firebase/firestore';
import { StorageService } from '../../core/data/storage.service';
import { Message } from '../../core/models/message';
import { ChatService } from '../../core/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  messageChat = '';
  private chatService: ChatService = inject(ChatService);
  private storage: StorageService = inject(StorageService);
  messages: any[] = [];
  text = '';
  message: Message = {
    content: this.text,
    sender: 'this.storage.user.lastName',
    timestamp: Timestamp.now()
  };
  subscription: Subscription | undefined;
  send() {
    this.chatService.createMessage(this.message);
    console.log("added")
  }
  async ngOnInit() {
    await this.chatService.getMessages().then((items) => {
      this.messages = items;
    });
  }





}
