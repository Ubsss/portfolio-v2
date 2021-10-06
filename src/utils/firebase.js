import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, getIdToken } from "firebase/auth";

class FirebaseObj {
  constructor() {
    this.config = {
      apiKey: "AIzaSyDe54Zw4jWdMk8uTRmLsxfonxxTcGTsO6k",
      authDomain: "full-stack-web.firebaseapp.com",
      databaseURL: "https://full-stack-web.firebaseio.com",
      projectId: "full-stack-web",
      storageBucket: "full-stack-web.appspot.com",
      messagingSenderId: "388903137374",
      appId: "1:388903137374:web:33782ad7f662e361",
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
    } catch (error) {}
  }

  /**
   * returns user token if available
   * @returns returns  current user token or null
   */
  async getCurrentUserToken() {
    try {
      let currentUser = this.fbAuth.currentUser;
      if (currentUser) return await getIdToken(currentUser);
      else return null;
    } catch (error) {
      return null;
    }
  }
}

export default new FirebaseObj();
