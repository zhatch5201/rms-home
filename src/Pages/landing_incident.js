import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = makeStyles({
   root: {
      width: '90vw',
      height: '1vh'
   },
   link: {
      textDecoration: 'none',
   },
   h1:{
      textAlign: 'center',
   },
   button: {
      width: '50vw',
      height: '25vh',
      margin: '5vh 25vw',
      background: 'orange',
      color: 'white',
      fontSize: '2em',
      borderRadius: '20px',
      '&:hover': {
         backgroundColor: '#e68a00',
         color: 'grey'
      }
   }
});

export default function LandingPagePeople() {
   let classes = styles();
   return (
      <div className={classes.root}>
         <h1>Where would you like to go?</h1>
         <Link className={classes.link} to="/incidents/grid"><Button className={classes.button}>View Incidents</Button></Link>
         <Link className={classes.link} to="/incidents/query_incident"><Button className={classes.button}>Search Incident</Button></Link>
         <Link className={classes.link} to="/incidents/add_incident"><Button className={classes.button}>Add Incident</Button></Link>
      </div>
   );
}