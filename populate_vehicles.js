const faker = require('faker');
const admin = require('firebase-admin');
const serviceAccount = require('./west-mec-rms-firebase-adminsdk-8pzgp-4072ae64ad.json');

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();


function choose(choices) {
   var index = Math.floor(Math.random() * choices.length);
   return choices[index];
}
function make_vehicle() {
   var Vehicle = {
      license_plate: faker.lorem.word(8),
      vin: faker.vehicle.vin(),
      symbols: {
         color: choose([`BLK`, `BLU`, `BRO`, `GRN`, `HAZ`, `GRY`]),
         year: faker.date.past(65).toLocaleDateString(),
         make: faker.vehicle.manufacturer(),
         model: faker.vehicle.model(),
         additional_details: faker.vehicle.type()
      },
      value: '$' + faker.commerce.price(1000, 150000),
      incidents: []
   };
   return Vehicle;
}

















setInterval(() => {
   const input_data = make_vehicle();
   db.collection('Vehicles').doc(`${input_data.vin}`).set(input_data);
   console.log(`Added ${input_data.vin}`);
}, 250);