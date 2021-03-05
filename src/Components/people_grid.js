import * as React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { app as firebase } from "./firebase";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

export default function PeopleGrid() {
   // ================================== Get People stuff ==================================
   const [people, setPeople] = useState([]);
   const [loading, setLoading] = useState(true);
   const ref = firebase.firestore().collection("People");

   async function getPeople() {
      setLoading(true);
      if (window.location.pathname === '/people/grid') {
         ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((person) => {
               items.push(person.data());
            });
            setPeople(items);
            setLoading(false);
            // console.log(people);
         });
      } else {
         let snapshot;
         const items = [];
         let pathname = window.location.pathname;
         var query = pathname.substring(13, pathname.length).split('%20');
         console.log(query);
         const peopleRef = firebase.firestore().collection('People');
         if (query.length === 1) {
            snapshot = await peopleRef.where('first_name', '==', query[0]).get();
         } else if (query.length === 2) {
            snapshot = await peopleRef.where('first_name', '==', query[0]).where('last_name', '==', query[1]).get();
         }
         snapshot.forEach((doc) => {
            items.push(doc.data());
         });
         setPeople(items);
         setLoading(false);
      }
   }

   useEffect(() => {
      getPeople();
   }, []);

   if (loading) {
      return (<CircularProgress color="secondary" />);
   }
   // ================================== Get People stuff ==================================
   // ================================== Link Styles ==================================

   // ================================== Link Styles ==================================


   const columns = [
      {
         field: 'fullName', headerName: 'Full name', sortable: false, width: 160, renderCell: (person_fields) => {
            // console.log(person_fields.row.demographic.date_of_birth);
            return (
               <Link to={`/people/query_people/${person_fields.getValue('id')}`}>{person_fields.getValue('first_name')} {person_fields.getValue('last_name')}</Link>
            );
         }
      },
      { field: 'address', headerName: 'Address', width: 200 },
      {
         field: 'dob', headerName: 'Date of Birth', width: 150, renderCell: (person_fields) => {
            // console.log(`Person Fields`, person_fields);
            return (<>{person_fields.row.demographic.date_of_birth}</>);
         }
      }

   ];

   const rows = people;
   // console.log(people);
   return (
      <Fragment>
         <div style={{ height: '100vh', width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={25} checkboxSelection />
         </div>
      </Fragment>


   );
}

