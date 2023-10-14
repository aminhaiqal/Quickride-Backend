const firebase = require('firebase/app');
const { setCustomClaimsBasedOnUserRoles } = require('../middleware/roles');
require('firebase/auth');

async function signup(email, password) {
  try {
    // Create a new user with Firebase Authentication
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    user.sendEmailVerification();
    await setCustomClaimsBasedOnUserRoles(user.uid, { passenger: true });
    return user;
    
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

module.exports = { signup };
