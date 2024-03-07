import { Injectable } from '@angular/core';
import {
  GoogleAuthProvider,
  Auth,
  signInWithPopup,
  User,
  setPersistence,
  browserSessionPersistence,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  async login() {
    try {
      const { user } = await setPersistence(
        this.auth,
        browserSessionPersistence
      ).then(async () => {
        return signInWithPopup(this.auth, new GoogleAuthProvider());
      });

      sessionStorage.setItem('token', user.refreshToken);

      return user;

      console.log('Authentication successful');
    } catch {
      return;
    }
  }

  hasUser() {
    this.auth.onAuthStateChanged((user) => {
      const token = sessionStorage.getItem('token');
      if (user) {
        if (!token) sessionStorage.setItem('token', user.refreshToken);

        return true;
      } else {
        if (token) sessionStorage.removeItem('token');

        return false;
      }
    });
  }
}
