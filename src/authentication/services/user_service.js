import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-4Z9t7jDzqL5N0c8k5G7UfO7hUj6Z3f0",
  authDomain: "quickride-qr0103.firebaseapp.com",
  projectId: "quickride-qr0103",
  storageBucket: "quickride-qr0103.appspot.com",
  messagingSenderId: "768687735747",
  appId: "1:768687735747:web:97e124085d25e581dff376",
  measurementId: "G-LM0GWDYYPL"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

class AuthService {
  async signUpWithEmailAndPassword(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signInWithEmailAndPassword(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return user;
    } catch (error) {
      throw error;
    }
  }

  // Add methods for signing in with Facebook and Google
}

export default AuthService;
