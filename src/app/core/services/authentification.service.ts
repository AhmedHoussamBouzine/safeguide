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
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private auth: Auth,
    private firestore: Firestore) { }


  public async signUp(userData: UserSignup) {
    try {
      // Create user
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        userData.email,
        userData.password,
      );

      // Initialize user
      const user = this.initUser({
        id: userCredential.user.uid,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      });

      // // Save user to the database
      // const userDoc = doc(this.firestore, "users", user.id);
      // await setDoc(userDoc, user);

      // Return user data
      return {
        error: null,
        user,
      };
    } catch (error: any) {
      return {
        error,
        user: null,
      };
    }
  }

  public async signIn(email: string, password: string) {
    try {
      // Sign in user
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password,
      );

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
