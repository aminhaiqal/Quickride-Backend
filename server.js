const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./configs/quickride-qr0103-firebase-adminsdk-24xtb-32489b161c.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define an endpoint to get Firestore data
app.get('/getFirestoreData', async (req, res) => {
  try {
    const data = [];

    // Replace 'your-collection-name' with the actual Firestore collection name
    const snapshot = await db.collection('users').get();

    snapshot.forEach((doc) => {
      data.push(doc.data());
    });

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data from Firestore' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
