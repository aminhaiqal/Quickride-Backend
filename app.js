const express = require('express');
const firebase = require('firebase/app');
const firebaseConfig = require('./configs/firebase');
const authRoute = require('./routes/auth-route');

require('firebase/database');

try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

// Create an Express.js app
const app = express();

// Define your routes and middleware here
app.use('/auth', authRoute);

// Start the Express.js server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
