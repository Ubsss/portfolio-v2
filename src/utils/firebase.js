import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, getIdToken } from "firebase/auth";

class FirebaseObj {
  constructor() {
    this.config = {
      apiKey: "AIzaSyB7NUyuwZ7v6zzGtw9pn0pUnY-FGY5lyHM",
      authDomain: "portfolio-site-8e4f6.firebaseapp.com",
      databaseURL: "https://portfolio-site-8e4f6.firebaseio.com",
      projectId: "portfolio-site-8e4f6",
      storageBucket: "portfolio-site-8e4f6.appspot.com",
      messagingSenderId: "193406269464",
      appId: "1:193406269464:web:b694f1dbe16c06adbaab6d",
      measurementId: "G-7R2ZQ3GZWM",
    };
    this.fbApp = initializeApp(this.config);
    this.fbAuth = getAuth(this.fbApp);
  }

  /**
   * signs in a anon user => remove console logs
   */
  async signInAnonUser() {
    try {
      await signInAnonymously(this.fbAuth);
    } catch (error) {
      // log error to server
    }
  }

  /**
   * returns user token if available
   * @returns returns  current user token or null
   */
  async getCurrentUserToken() {
    try {
      return this.fbAuth.currentUser.getIdToken(true) || null;
    } catch (error) {
      // log error to server
      return null;
    }
  }
}

export default new FirebaseObj();
