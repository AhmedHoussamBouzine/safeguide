import { Injectable } from '@angular/core';
import {
  Firestore,
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from "@angular/fire/firestore";
import { Message } from '../models/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messagesCollection = collection(this.firestore, "messages");

  constructor(private firestore: Firestore) { }

  async getMessages(): Promise<Message[]> {
    const itemsSnapshots = await getDocs(collection(this.firestore, "messages"));
    return itemsSnapshots.docs.map((doc) => doc.data() as Message);
  }

  async sendMessage(message: any): Promise<void> {
    await setDoc(doc(this.firestore, "messages", message.id), message);
  }
  async createMessage(message: Partial<Message>) {
    const response = await addDoc(this.messagesCollection, message);
    return response.id;
  }

}
