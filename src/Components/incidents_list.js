import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { app as firebase } from './firebase';
import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  button: {
    width: 250,
    margin: 10,
    marginLeft: 1090,
    border: 2,
    fontSize: 12,
    borderRadius: 10,
    flexWrap: 'nowrap',
  },
});


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
    field: 'id', headerName: 'Full name', sortable: false, width: 350, renderCell: (incidents_fields) => {
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
      <Button variant="contained" color="primary">
        New Incidence Form
      </Button>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}