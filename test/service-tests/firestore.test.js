const admin = require('firebase-admin');
const { expect } = require('chai');
const serviceAccount = require('../../configs/quickride-qr0103-firebase-adminsdk-24xtb-32489b161c.json');

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
