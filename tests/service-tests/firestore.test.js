import admin from 'firebase-admin';
import { expect } from 'chai';
import serviceAccount from '../../configs/quickride-qr0103-firebase-adminsdk-24xtb-32489b161c.json' assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'http://localhost:8080', 
});

const { firestore } = admin;
const db = firestore();

describe('Firestore Connection Tests', function () {
  it('should return data from Firestore', async function () {
    const docRef = db.collection('testCollection').doc('testDocument');
    docRef.set({ field1: 'value1' })
    .then(() => docRef.get())
    .then(docSnapshot => {
      const data = docSnapshot.data();
      expect(data.field1).to.equal('value1');
      done();
    })
    .catch(err => done(err));

  });
});
