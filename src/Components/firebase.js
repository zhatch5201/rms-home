import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyCGf2T2LUFEhTFahqvRjYtnKPIcqV6Ch3U",
   authDomain: "west-mec-rms.firebaseapp.com",
   projectId: "west-mec-rms",
   storageBucket: "west-mec-rms.appspot.com",
   messagingSenderId: "691689728956",
   appId: "1:691689728956:web:7ef88db410ec4cf79619b9",
   measurementId: "G-LQDQB0JQ1B"
};

firebase.initializeApp(firebaseConfig);

export default firebase;