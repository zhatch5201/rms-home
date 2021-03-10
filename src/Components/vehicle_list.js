import * as React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { app as firebase } from "./firebase";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

export default function VehicleGrid() {
   // ================================== Get People stuff ==================================
   const [vehicle, setVehicle] = useState([]);
   const [loading, setLoading] = useState(true);
   const ref = firebase.firestore().collection("People");

   async function getVehicle() {
      setLoading(true);
      if (window.location.pathname === '/vehicle/grid') {
         ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((person) => {
               items.push(person.data());
            });
            setVehicle(items);
            setLoading(false);
            // console.log(people);
         });
      } else {
         let snapshot;
         const items = [];
         let pathname = window.location.pathname;
         var query = pathname.substring(13, pathname.length).split('%20');
         console.log(query);
         const vehicleRef = firebase.firestore().collection('Vehicle');
         if (query.length === 1) {
            snapshot = await vehicleRef.where('first_name', '==', query[0]).get();
         } else if (query.length === 2) {
            snapshot = await vehicleRef.where('first_name', '==', query[0]).where('last_name', '==', query[1]).get();
         }
         snapshot.forEach((doc) => {
            items.push(doc.data());
         });
         setVehicle(items);
         setLoading(false);
      }
   }

   useEffect(() => {
      getVehicle();
   }, []);

   if (loading) {
      return (<CircularProgress color="secondary" />);
   }

const columns = [
  
  { field: 'id', headerName: 'Vin', sortable: false, width: 150, renderCell: (vehicle_fields) => {
    return (
      <Link to={`/vehicles/query_vehicle/${vehicle_fields.getValue('id')}`}>{vehicle_fields.getValue('id')}</Link>
    );
  }
},
  { field: 'firstName', headerName: 'License Plate',sortable: false, width: 150, renderCell: (vehicle_fields) => {
    return (
      <Link to={`/vehicles/query_vehicle/${vehicle_fields.getValue('first_name')}`}>{vehicle_fields.getValue('first_name')}</Link>
    );
  }
},
  { field: 'lastName', headerName: 'Make',sortable: false, width: 100, renderCell: (vehicle_fields) => {
    return (
      <Link to={`/vehicles/query_vehicle/${vehicle_fields.getValue('last_name')}`}>{vehicle_fields.getValue('last_name')}</Link>
    );
  }
},
  {
    field: 'age',
    headerName: 'Model',
    type: 'number',
    sortable: false, width: 100, renderCell: (vehicle_fields) => {
      return (
        <Link to={`/vehicles/query_vehicle/${vehicle_fields.getValue('age')}`}>{vehicle_fields.getValue('age')}</Link>
      );
    }
  },
  {
    field: 'fullName',
    headerName: 'Year',
    description: 'This column has a value getter and is not sortable.',
    sortable: false, width: 100, renderCell: (vehicle_fields) => {
      return (
        <Link to={`/vehicles/query_vehicle/${vehicle_fields.getValue('full_name')}`}>{vehicle_fields.getValue('full_name')}</Link>
      );
    }
  },
  // { field: 'firstName', headerName: 'Code/Common Name', width: 130 },
  // { field: 'lastName', headerName: 'Make', width: 130 }
];

const rows = vehicle;
  return (
    <Fragment id="pepe">
    <div id="pepe" style={{ height: 400, width: '100%'}}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    </Fragment>
  );
}