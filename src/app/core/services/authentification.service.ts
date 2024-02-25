import { Injectable } from '@angular/core';

import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "@angular/fire/auth";
import { User, UserSignup } from "../models/user";
import {
  Firestore,
  Timestamp,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from "@angular/fire/storage";
import { StorageService } from '../data/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private auth: Auth,
    private firestore: Firestore,
    private storage: StorageService) { }


  public async signUp(userData: UserSignup) {
    try {
      // Create user
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        userData.email,
        userData.password,
      );
      // Store user data in Firestore
      await this.storeUserData(userCredential.user.uid, userData);

      // Return user data
      return {
        error: null,
        user: userCredential.user,
      };
    } catch (error: any) {
      return {
        error,
        user: null,
      };
    }
  }
  private async storeUserData(userId: string, userData: UserSignup) {
    try {
      const userRef = doc(this.firestore, 'users', userId);
      await setDoc(userRef, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      });
    } catch (error) {
      console.error('Error while storing user data:', error);
      throw error;
    }
  }
  public getUser(userId: string): Observable<User> {
    return new Observable((observer) => {
      const userDoc = doc(this.firestore, "users", userId);
      const unsubscribe = onSnapshot(userDoc, (user) => {
        observer.next(user.data() as User);
      });

      return () => unsubscribe();
    });
  }
  public async signIn(email: string, password: string) {
    try {
      // Sign in user
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password,
      );
      const userDoc = doc(this.firestore, "users", userCredential.user.uid);
      const userSnapshot = await getDoc(userDoc);
      let userData = userSnapshot.data() as User;
      this.storage.user = userData;
      // Return user data
      return {
        error: null,
        user: userCredential.user,
      };
    } catch (error: any) {
      return {
        error,
        user: null,
      };
    }
  }

  public async signInWithGoogle() {
    // Show Google sign in popup
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(this.auth, provider);

    // Check if user has an email
    if (userCredential.user.email === null) {
      return {
        error: "Google sign in failed",
        user: null,
      };
    }

    // Check if user exists in the database
    const userDoc = doc(this.firestore, "users", userCredential.user.uid);
    const userSnapshot = await getDoc(userDoc);
    let userData = userSnapshot.data() as User;

    if (!userSnapshot.exists()) {
      // Get first and last name from display name
      const [firstName, lastName] = userCredential.user.displayName?.split(
        " ",
      ) || ["", ""];

      // Initialize user
      const user = this.initUser({
        id: userCredential.user.uid,
        firstName,
        lastName,
        email: userCredential.user.email,
        picture: userCredential.user.photoURL || "assets/user.svg",
      });

      // Save user to the database
      await setDoc(userDoc, user);
      userData = user;
    }

    // Return user data
    return {
      error: null,
      user: userData,
    };
  }

  public signOut() {
    this.auth.signOut();
  }
  public initUser(data: Partial<User>): User {
    // Define default user
    const defaultUser: User = {
      id: "",
      firstName: "Unknown",
      lastName: "",
      picture: "assets/user.svg",
      email: "",
      location: {
        lat: 0,
        lon: 0,
      },
      ratings: [],
      blocked: false,
      lastLogin: Timestamp.now(),
      joinedAt: Timestamp.now(),
    };

    // Return user with data
    return {
      ...defaultUser,
      ...data,
      location: {
        ...defaultUser.location,
        ...data.location,
      },
    };
  }

  public async getAccessToken() {
    const token = await this.auth.currentUser?.getIdToken();
    return token;
  }
}
