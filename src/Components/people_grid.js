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

   function getPeople() {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((person) => {
            items.push(person.data());
         });
         setPeople(items);
         setLoading(false);
         // console.log(people);
      });
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
            return (
               <Link to={`/people/${person_fields.getValue('id')}`}>{person_fields.getValue('first_name')} {person_fields.getValue('last_name')}</Link>
            );
         }
      },
      { field: 'address', headerName: 'Address', width: 150 },

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

