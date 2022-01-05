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
   * returns user token if available
   * @returns returns  current user token or null
   */
  async getCurrentUserToken() {
    try {
      if (!this.fbAuth.currentUser) await signInAnonymously(this.fbAuth);
      return (await this.fbAuth.currentUser.getIdToken(true)) || null;
    } catch (error) {
      // log error to server
      console.log(error);
      return null;
    }
  }
}

export default new FirebaseObj();
