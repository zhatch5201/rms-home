//  ================= Get People ==============
import firebase from 'firebase';
import { useState, useEffect } from 'react';
//  ================= Get People ==============
// ================== Card Imports ============
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// ================== Card Imports ============
// ============== Accordion Imports ===========
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// ============== Accordion Imports ===========

const cardStyles = makeStyles({
   root: {
      background: '#ffb938',
      color: 'amber',
      minWidth: 275,
      maxWidth: '33vw',
      margin: '5vw auto'
   },
   img: {
      // position: 'absolute',
      // transform: 'translateY(-90px) translateX(300%)'
   },
   h4: {
      width: '100%',
      textAlign: 'center',
      margin: '-19px 0px 0px 0px'
   },
   td: {
      color: '#704019',
      textAlign: 'right'
   }
});

const accordionStyles = makeStyles((theme) => ({
   bottom: {
      background: '#8f774a',
      // width: '100px',
   },
   heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
   },
   table: {
      width: '100%'
   },
   th: {
      textAlign: 'left'
   },
   td: {
      color: '#ffde9c',
      textAlign: 'right'
   }
}));


export default function PersonCard() {
   let person_query_raw = window.location.pathname.toString();
   // console.log(person_query_raw);
   const person_query = person_query_raw.substring(person_query_raw.length - 36, person_query_raw.length);
   // console.log(person_query);
   const classes = cardStyles();
   const accordionClasses = accordionStyles();
   // Has to load whole People collection to get random person... for now...
   const [person, setPeople] = useState();
   const [loading, setLoading] = useState(true);
   const ref = firebase.firestore().collection("People");
   // var person;
   async function getPerson() {
      const doc = await ref.doc(person_query).get();
      setPeople(doc.data());
      setLoading(false);
      return doc.data();
   }
   useEffect(() => {
      getPerson();
   }, []);

   if (loading) {
      return (<h1>Loading...</h1>);
   }

   // console.log(people);
   // console.log(`HELOOOOLLOAEPIFHAEOIFH ${JSON.stringify(person, null, 4)}`);
   // Has to load whole People collection to get random person... for now...
   // Card content and integration

   return (
      <Card className={classes.root}>
         <CardContent>
            <h1>{`${person.first_name} ${person.middle_name}. ${person.last_name}`} <br /><img className={classes.img} alt='mugshot' width="100px" height="100px" src={person.mugshots} /></h1>
            <h4 className={classes.h4}>Details</h4><hr />
            <table className={accordionClasses.table}>
               <tbody>
                  <tr>
                     <th className={accordionClasses.th}>Address</th>
                     <td className={classes.td}>{person.address}</td>
                  </tr>
                  <tr>
                     <th className={accordionClasses.th}>Phone Number</th>
                     <td className={classes.td}>{person.phone_number}</td>
                  </tr>
                  <tr>
                     <th className={accordionClasses.th}>Social Security Number</th>
                     <td className={classes.td}>{person.ssn}</td>
                  </tr>
                  <tr>
                     <th className={accordionClasses.th}>Hazard</th>
                     <td color="red" className={classes.td}>{person.hazard}</td>
                  </tr>
                  <tr>
                     <th className={accordionClasses.th}>Vehicles</th>
                     <td className={classes.td}>{person.vehicles}</td>
                  </tr>
                  <tr>
                     <th className={accordionClasses.th}>Incidents</th>
                     <td className={classes.td}>{person.incidents}</td>
                  </tr>
               </tbody>
            </table>
            <Accordion className={accordionClasses.bottom}>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <Typography className={accordionClasses.heading}>Demographic Information</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <table className={accordionClasses.table}>
                     <tbody>
                        <tr>
                           <th className={accordionClasses.th}>Age</th>
                           <td className={accordionClasses.td}>{person.demographic.age}</td>
                        </tr>
                        <tr>
                           <th className={accordionClasses.th}>Date of bith</th>
                           <td className={accordionClasses.td}>{person.demographic.date_of_birth}</td>
                        </tr>
                        <tr>
                           <th className={accordionClasses.th}>Eye Color</th>
                           <td className={accordionClasses.td}>{person.demographic.eye_color}</td>
                        </tr>
                        <tr>
                           <th className={accordionClasses.th}>Hair Color</th>
                           <td className={accordionClasses.td}>{person.demographic.hair_color}</td>
                        </tr>
                        <tr>
                           <th className={accordionClasses.th}>Height</th>
                           <td className={accordionClasses.td}>{person.demographic.height.substring(0, 1)}ft. {person.demographic.height.substring(1, 2)}in</td>
                        </tr>
                        <tr>
                           <th className={accordionClasses.th}>Race</th>
                           <td className={accordionClasses.td}>{person.demographic.race}</td>
                        </tr>
                        <tr>
                           <th className={accordionClasses.th}>Sex</th>
                           <td className={accordionClasses.td}>{person.demographic.sex}</td>
                        </tr>
                     </tbody>
                  </table>
               </AccordionDetails>
            </Accordion>
         </CardContent> 
      </Card>
   );
   // Card content and integration
}