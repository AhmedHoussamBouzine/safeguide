import { Injectable } from '@angular/core';
import {
  DocumentData,
  Firestore,
  QuerySnapshot,
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
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messagesCollection = collection(this.firestore, "messages");

  constructor(private firestore: Firestore) { }

  async getMessages(): Promise<Message[]> {
    const qry = query(
      this.messagesCollection,
      orderBy("timestamp", "asc"),
    );
    const itemsSnapshots = await getDocs(qry);
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


