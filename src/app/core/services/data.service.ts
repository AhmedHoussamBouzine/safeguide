import { Injectable } from '@angular/core';
import {
  Firestore,
  Timestamp,
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
import { Item } from '../models/item';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  itemsCollection = collection(this.firestore, "items");
  constructor(private firestore: Firestore) { }
  async getitemsByCity(city: string): Promise<Item[]> {
    const qry = query(
      this.itemsCollection,
      where("city", "==", city),
      limit(100),
    );
    const itemsSnapshots = await getDocs(qry);
    return itemsSnapshots.docs.map((doc) => doc.data() as Item);
  }
  async getitemsByCategory(category: string): Promise<Item[]> {
    const qry = query(
      this.itemsCollection,
      where("category", "==", category),
      limit(100),
    );
    const itemsSnapshots = await getDocs(qry);
    return itemsSnapshots.docs.map((doc) => doc.data() as Item);
  }

}
