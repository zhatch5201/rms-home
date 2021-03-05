import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = makeStyles({
   root: {
      width: '99vw',
      height: '120vh',
      background: '#ff9900',
   },
   link: {
      textDecoration: 'none',

   },
   button: {
      color: '#FFF',
      width: '50vw',
      height: '25vh',
      margin: '5vh 25vw',
      background: '#000',
      fontSize: '2em',
      borderRadius: '20px',
      '&:hover': {
         backgroundColor: '#ff9800',
         color: '#ab003c'
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