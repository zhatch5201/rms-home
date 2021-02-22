import * as React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import firebase from "./firebase";
import CircularProgress from '@material-ui/core/CircularProgress';

// hunter's testing
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// hunter's end

export default function PeopleGrid() {
   const [people, setPeople] = useState([]);
   const [loading, setLoading] = useState(true);
   const ref = firebase.firestore().collection("People");

   // just testing
   const useStyles = makeStyles({
      root: {
        width: 500,
      },
    });
   const classes = useStyles();
  const [value, setValue] = React.useState(0);
      // end of testing

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
         {/* test */}
         <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
      {/* end of test */}
         <div style={{ height: '100vh', width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={25} checkboxSelection />
         </div>
      </Fragment>

      
   );
}
