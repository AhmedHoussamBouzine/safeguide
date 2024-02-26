import { Timestamp } from "@angular/fire/firestore";
export interface Message {
  content: string;
  sender: string;
  timestamp: Timestamp;
}
