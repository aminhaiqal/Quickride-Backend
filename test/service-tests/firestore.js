const admin = require('firebase-admin');
const { expect } = require('chai');
const serviceAccount = require('./path/to/your/test-serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'http://localhost:8080', 
});

const db = admin.firestore();

describe('Firestore Tests', function () {
  it('should return data from Firestore', async function () {
    const docRef = db.collection('testCollection').doc('testDocument');
    await docRef.set({ field1: 'value1' });

    const docSnapshot = await docRef.get();
    const data = docSnapshot.data();

    expect(data.field1).to.equal('value1');
  });
});
