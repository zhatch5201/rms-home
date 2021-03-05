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
   h1:{
      textAlign: 'center',
   },
   button: {
      color: '#FFF',
      width: '50vw',
      height: '25vh',
      margin: '5vh 25vw',
      background: '#ff9900',
      color: 'white',
      fontSize: '2em',
      borderRadius: '20px',
      '&:hover': {
         backgroundColor: '#d17d00',
         color: 'grey',
         boxShadow: '8px 12px 31px -10px grey'
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