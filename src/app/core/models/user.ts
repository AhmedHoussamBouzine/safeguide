import { Timestamp } from "@angular/fire/firestore";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  email: string;
  location: { lat: number; lon: number };
  ratings: { rating: number; by: string }[];
  blocked: boolean;
  lastLogin: Timestamp;
  joinedAt: Timestamp;
}

export interface UserSignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
