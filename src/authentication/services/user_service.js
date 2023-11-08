const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = require('../../../configs/firebase');
firebase.initializeApp(firebaseConfig);

class AuthService {
  async signUpWithEmailAndPassword(email, password) {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async signInWithEmailAndPassword(email, password) {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  // Add methods for signing in with Facebook and Google
}

module.exports = new AuthService();
