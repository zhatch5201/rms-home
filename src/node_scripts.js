const admin = require('firebase-admin');
const serviceAccount = require('./inside_sa.json');

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
});

async function main() {
   const db = admin.firestore();
   const peopleRef = await db.collection('People').where('first_name', '==', 'Kendrick').get();
   if (peopleRef.exists) {
      console.log(`It's not real!`);
      return false;
   } else {
      peopleRef.forEach((doc) => {
         console.log(doc.data());
      });
   }
}
main();