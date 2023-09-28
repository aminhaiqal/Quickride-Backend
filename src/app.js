const express = require('express');
const firebase = require('firebase/app');
const firebaseConfig = require('../configs/firebase');
const { signup } = require('../src/services/auth');

require('firebase/database');

// Initialize Firebase with your configuration
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

// Create an Express.js app
const app = express();

// Define your routes and middleware here
app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Call the signup function from the auth module
    const user = await signup(email, password);

    // Redirect to the login page after successful signup
    res.redirect('/login');
  } catch (error) {
    console.error('Error creating user:', error);
    res.redirect('/signup'); // Redirect back to the signup page on failure
  }
});

// Start the Express.js server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
