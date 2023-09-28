const express = require('express');
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = express();
const firebaseConfig = require('./configs/firebase');

const port = 3000;

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
