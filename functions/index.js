const functions = require("firebase-functions");
const admin = require('firebase-admin');
const algoliasearch = require('algoliasearch');

const ALGOLIA_APP_ID = "7SCTVV9MV5";
const ALGOLIA_ADMIN_KEY = "b24b46c99b9320ca407b349754f27069";
const ALGOLIA_INDEX_NAME = 'users';

admin.initializeApp(functions.config().firebase);

exports.addFirestoreDataToAlgolia = functions.https.onRequest((req, res) => {
   var arr = [];
   admin.firestore().collection('people').get.then((docs) => {
      docs.forEach((doc) => {
         let user = doc.data();
         user.objectID = doc.id;

         arr.push(user);
      });
      var client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
      var index = client.initIndex(ALGOLIA_INDEX_NAME);

      index.saveObjects(arr, function (err, content) {
         res.status(200).send(content);
      });
   });

});