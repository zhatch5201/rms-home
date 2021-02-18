import * as React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import firebase from "./firebase";
import CircularProgress from '@material-ui/core/CircularProgress';

export default function PeopleGrid() {
   const [people, setPeople] = useState([]);
   const [loading, setLoading] = useState(true);
   const ref = firebase.firestore().collection("People");

   function getPeople() {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((person) => {
            var timer = setTimeout(() => { console.log(`test`); }, 50);
            items.push(person.data());
            clearTimeout(timer);
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


   const columns = [
      { field: 'id', headerName: 'ID', width: 100 },

      { field: 'first_name', headerName: 'First name', width: 130 },
      { field: 'last_name', headerName: 'Last name', width: 130 },
      { field: 'middle_name', headerName: 'Mid In.', width: 130, },
      { field: 'address', headerName: 'Address', width: 150 },
      // { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160, valueGetter: (params) => `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`, },
   ];

   const rows =
      people
      ;
   // console.log(people);
   return (
      <Fragment>
         <div style={{ height: '100vh', width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={25} checkboxSelection />
         </div>
      </Fragment>
   );
}
