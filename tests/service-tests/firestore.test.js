import { initializeApp, credential as _credential, firestore } from 'firebase-admin';
import { expect } from 'chai';
import serviceAccount from '../../configs/quickride-qr0103-firebase-adminsdk-24xtb-32489b161c.json';

initializeApp({
  credential: _credential.cert(serviceAccount),
  databaseURL: 'http://localhost:8080', 
});

const db = firestore();

describe('Firestore Connection Tests', function () {
  it('should return data from Firestore', async function () {
    const docRef = db.collection('testCollection').doc('testDocument');
    await docRef.set({ field1: 'value1' });

    const docSnapshot = await docRef.get();
    const data = docSnapshot.data();

    expect(data.field1).to.equal('value1');
  });
});
