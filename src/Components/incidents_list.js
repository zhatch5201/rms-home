import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { app as firebase } from './firebase';
import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';



export default function IncidentsList() {
  const [Incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = firebase.firestore().collection("Incidents");

  function getIncidents() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((person) => {
        items.push(person.data());
      });
      setIncidents(items);
      setLoading(false);
      console.log(Incidents);
    });
  }

  useEffect(() => {
    getIncidents();
  }, []);

  if (loading) {
    return (<CircularProgress color="secondary" />);
  }

  const columns = [{
    field: 'id', headerName: 'Serial Number', sortable: false, width: 350, renderCell: (incidents_fields) => {
      return (
        <Link to={`/incidents/query_incident/${incidents_fields.getValue('id')}`}>{incidents_fields.getValue('id')}</Link>
      );
    }
    // { field: 'firstName', headerName: 'Code/Common Name', width: 130 },
    // { field: 'lastName', headerName: 'Make', width: 130 }
  }];

  const rows = Incidents;
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}