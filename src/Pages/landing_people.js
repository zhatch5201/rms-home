// import PeopleGrid from '../Components/people_grid';
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
         {/* add these routes when you get home, something like `people/list and people/:uuid and people/new_person` */}
         <Link className={classes.link} to="/people/grid"><Button className={classes.button}>View People</Button></Link>
         <Link className={classes.link} to="/people/query_people"><Button className={classes.button}>Search People</Button></Link>
         <Link className={classes.link} to="/people/add_person"><Button className={classes.button}>Add Person</Button></Link>
      </div>
   );
}