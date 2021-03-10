import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { app as firebase } from './firebase';
import { useState, useEffect, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';



export default function IncidentsList() {
  const [Incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = firebase.firestore().collection("Incidents");

  async function getIncidents() {
    setLoading(true);
    if (window.location.pathname === '/incidents/grid') {
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((incident) => {
          items.push(incident.data());
        });
        setIncidents(items);
        setLoading(false);
        // console.log(people);
      });
    } else {
      let snapshot;
      const items = [];
      let pathname = window.location.pathname;
      var query = pathname.substring(15, pathname.length);
      console.log(query);
      const incidentRef = firebase.firestore().collection('Incident');
      if (query.length === 1) {
        snapshot = await incidentRef.where('id', '==', query[0]).get();
      }
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setIncidents(items);
      setLoading(false);
    }
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
    <Fragment id="pepe">
    <div id="pepe" style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    </Fragment>
  );
}