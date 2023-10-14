const admin = require('firebase-admin');
const serviceAccount = require('../configs/quickride-qr0103-firebase-adminsdk-24xtb-32489b161c.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    });

const db = admin.firestore();
const userCollection = db.collection('users');

const CreateUser = async (email, last_login, password, phone_num, displayName) => {
    const userRecord = await admin.auth().createUser({
        email,
        password,
        customClaims: {
            admin: false,
            passenger: true,
            driver: false,
        },
    });

    const userData = {
        email,
        last_login,
        phone_num,
        displayName,
    };

    await userCollection.doc(userRecord.uid).set(userData);

    return userRecord;
}

module.exports = {
    CreateUser
}