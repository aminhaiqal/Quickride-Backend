const firebase = require('firebase/app');
require('firebase/auth');

// Initialize Firebase (as shown previously)

// Function to handle user signup
async function signup(email, password) {
  try {
    // Create a new user with Firebase Authentication
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Sending a verification email
    user.sendEmailVerification();

    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

module.exports = { signup };
