import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
// Zack
import { useForm } from 'react-hook-form';
import firebase from 'firebase';
// Zack

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 3,
    position: 'relative',
    alignItems: 'center',
    marginTop: -40,
  },
  grow: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  inputRoot: {
    color: 'white',
    fontSize: 20,
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  search: {
    color: 'white',
    padding: 5,
    width: '25vw',
    height: '8vh',
    margin: '27vh 36vw',
    background: '#b26a00',
    fontSize: '2em',
    borderRadius: '20px',
    '&:hover': {
      backgroundColor: '#ff9800',
      color: '#ab003c'
    }
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    let snapshot;
    let x = 0;
    let query = data.query.split(' ');
    console.log(query);
    const peopleRef = firebase.firestore().collection('Incidents');
    if (query.length === 1) {
      snapshot = await peopleRef.where('incident_type', '==', query[0]).get();
    }
    // else if (query.length === 2) {
    //   snapshot = await peopleRef.where('first_name', '==', query[0]).where('last_name', '==', query[1]).get();
    // }
    if (snapshot.empty) {
      console.log('Nobody has that Name!');
      alert('Nobody has that Name!');
    } else {
      snapshot.forEach((doc) => {
        console.log(doc.id);
        x++;
        window.location.pathname = `incidents/grid/${data.query}`;
        console.log(x);
      });
    };
  };

  return (
    <div className={classes.grow}>
      <div className={classes.search}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.root}>
    <FormControl className={classes.formControl}>
          <InputLabel name="Search Field" id="demo-simple-select-label"></InputLabel>
          <select>
              <option type='button' value='SSN'>SSN</option>
              <option type='button' value='Address'>Address</option>
              <option type='button' value='Date of Birth'>Date of Birth</option>
          </select>
        </FormControl>
    </div>
          <SearchIcon />&nbsp;

          <InputBase inputRef={register} name="query" placeholder="Search for Incident" classes={{ root: classes.inputRoot, input: classes.inputInput, }} inputProps={{ 'aria-label': 'search' }} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}