const express = require('express');
const firebase = require('firebase/app');
require('firebase/database');

// Import Firebase configuration from firebase.js
const firebaseConfig = require('../configs/firebase');

// Initialize Firebase with your configuration
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

// Create an Express.js app
const app = express();

// Define your routes and middleware here

// Start the Express.js server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
