// import PeopleGrid from '../Components/people_grid';
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
         {/* add these routes when you get home, something like `people/list and people/:uuid and people/new_person` */}
         <Link className={classes.link} to="/people/grid"><Button className={classes.button}>View People</Button></Link>
         <Link className={classes.link} to="/people/query_people"><Button className={classes.button}>Search People</Button></Link>
         <Link className={classes.link} to="/people/add_person"><Button className={classes.button}>Add Person</Button></Link>
      </div>
   );
}