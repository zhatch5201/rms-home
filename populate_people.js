const faker = require('faker');
const admin = require('firebase-admin');
const serviceAccount = require('./west-mec-rms-firebase-adminsdk-8pzgp-4072ae64ad.json');
const {uuid} = require('uuidv4');

admin.initializeApp({
	credential : admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

function choose(choices) {
	var index = Math.floor(Math.random() * choices.length);
	return choices[index];
}
function make_person() {
	var Person = {
		id              : uuid(),
		report_code     : choose([ `RP`, `W`, `V`, `IL`, `S` ]),
		last_name       : faker.name.lastName(),
		first_name      : faker.name.firstName(),
		middle_name     : faker.name.middleName(),
		ssn             : faker.phone.phoneNumber('###-##-####'),
		driver_license  : {
			number     : `D${faker.phone.phoneNumber('########')}`,
			state      : `AZ`,
			expiration : faker.date.future(49).toLocaleDateString()
		},
		hazard          : choose([ `yes`, `no` ]),
		demographic     : {
			race             : choose([ `W`, `B`, `H`, `I`, `A`, `U` ]),
			sex              : choose([ `U`, `F`, `M` ]),
			height           : faker.phone.phoneNumber('###'),
			weight           : faker.phone.phoneNumber('###'),
			eye_color        : choose([ `BLK`, `BLU`, `BRO`, `GRN`, `HAZ`, `GRY` ]), // CAPITALIZE ALL FIELDS
			hair_color       : choose([ `PNK`, `BLN`, `BLD`, `BLK`, `BLU`, `BRO`, `GRN`, `HAZ`, `GRY` ]),
			date_of_birth    : faker.date.past(65).toLocaleDateString(),
			age              : 15,
			special_features : {
				face : choose([ `tattoo`, `scar`, `missing`, null ]),
				body : choose([ `tattoo`, `scar`, `missing`, null ]),
				arms : choose([ `tattoo`, `scar`, `missing`, null ])
			}
		},
		address         : faker.address.streetAddress(),
		phone_number    : faker.phone.phoneNumberFormat(),
		known_incidents : [],
		vehicles        : [],
		gang_affiliated : choose([ true, false ]),
		mugshots        : `https://randomuser.me/api/portraits/thumb/${choose([ 'men', 'women' ])}/${Math.floor(Math.random() * 100)}.jpg`
	};
	return Person;
}

// var test = make_person();
// db.collection('people').doc(`${test.last_name}, ${test.first_name}`).set(test);
setInterval(() => {
	const input_data = make_person();
	db.collection('People').doc(input_data.id).set(input_data);
	console.log(`Added ${input_data.first_name} ${input_data.last_name}`);
}, 100);
