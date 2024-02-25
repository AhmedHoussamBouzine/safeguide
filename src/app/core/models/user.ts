import { Timestamp } from "@angular/fire/firestore";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  email: string;
  lastLogin: Timestamp;
  joinedAt: Timestamp;
}

export interface UserSignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
