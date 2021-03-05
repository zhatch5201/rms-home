import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
// Zack
import { useForm } from 'react-hook-form';
import firebase from 'firebase';
// Zack

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
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
    console.log(window.location.pathname);
    var person = firebase.firestore().collection('Incidents').where('');
  };

  return (
    <div className={classes.grow}>
      <div className={classes.search}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SearchIcon />
          <InputBase placeholder="Search for Incident" classes={{ root: classes.inputRoot, input: classes.inputInput, }} inputProps={{ 'aria-label': 'search' }} />
          {/* <br /> */}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}