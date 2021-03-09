import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = makeStyles({
   root: {
      textAlign: 'center',
      width: '73vw',
      height: '120vh',
      background: '#ff9900',
   },
   link: {
      textDecoration: 'none',
   },
   h1:{
      textAlign: 'center',
      textDecoration: 'none',
   },
   button: {
      color: '#000',
      width: '40vw',
      height: '25vh',
      margin: '5vh 17vw',
      background: '#FFF',
      fontSize: '2em',
      borderRadius: '20px',
      textDecoration: 'none',
      '&:hover': {
         backgroundColor: 'grey',
         color: 'white',
         boxShadow: '8px 12px 31px -10px grey',
         textDecoration: 'none',
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