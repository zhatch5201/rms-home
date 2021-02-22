import React, { useState, useEffect, Fragment } from "react";
import firebase from "./firebase";

function SnapshotFirebase() {
   const [People, setPeople] = useState([]);
   const [loading, setLoading] = useState(false);

   const ref = firebase.firestore().collection("People");

   //REALTIME GET FUNCTION
   function getPeople() {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((doc) => {
            items.push(doc.data());
         });
         setPeople(items);
         setLoading(false);
      });
   }

   useEffect(() => {
      getPeople();
      // eslint-disable-next-line
   }, []);
   return (
      <Fragment>
         {People.map((person) => (
            <p>{person.first_name} {person.last_name}</p>
         ))}
      </Fragment>
   );
}
export default SnapshotFirebase;