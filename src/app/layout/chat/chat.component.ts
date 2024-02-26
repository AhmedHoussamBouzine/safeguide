import { Component, inject } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FormsModule } from '@angular/forms';
import { Timestamp } from 'firebase/firestore';
import { StorageService } from '../../core/data/storage.service';
import { Message } from '../../core/models/message';
import { ChatService } from '../../core/services/chat.service';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import dayjs from "dayjs";
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
  subscription: Subscription | undefined;

  async ngOnInit() {
    await this.chatService.getMessages().then((items) => {
      this.messages = items;
    });
  }

  send() {
    let sender: string;
    if (this.storage.user && this.storage.user.lastName) {
      sender = this.storage.user.lastName;
    } else {
      sender = 'user';
    }
    var message = {
      content: this.messageChat,
      sender: sender,
      timestamp: Timestamp.now()
    };
    this.chatService.createMessage(message);
    this.messages.push(message);
    this.messageChat = '';
  }

  time(date: Date): string {
    return dayjs(date).format('dddd [at] HH:mm A');
  }





}
