import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import firebase from 'firebase';

const cardStyles = makeStyles({
   root: {
      minWidth: 275,
      maxWidth: 275,
      borderRadius: 10,
      background: '#69647b',
      color: '#c7bfac'
   },
   title: {
      fontSize: 14,
   },
   pos: {
      marginBottom: 12,
   },
});
const accordionStyle = makeStyles((theme) => ({
   root: {
      width: '90%',
      margin: '5px auto',
      background: '#374055',
      color: '#cdcea9'
   },
   heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
   },
   ul: {
   }
}));

export default function PersonCard() {
   const cardClasses = cardStyles();
   const accordionClasses = accordionStyle();
   return (
      <Fragment>
         <Card className={cardClasses.root} variant="outlined">
            <CardContent>
               <Typography className={cardClasses.title} color="textSecondary" gutterBottom>
                  Peepee poopoo
               </Typography>



               <Typography variant="h5" component="h2">
                  <Accordion className={accordionClasses.root}>
                     <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                     >
                        <Typography className={accordionClasses.heading}>Demographic</Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <Typography className={accordionClasses.ul}>
                           <table>
                              <tbody>
                                 <tr>
                                    <th>Gender</th>
                                    <td className={accordionClasses}>Male</td>
                                 </tr>
                              </tbody>
                           </table>
                        </Typography>
                     </AccordionDetails>
                  </Accordion>
               </Typography>




               <Typography className={cardClasses.pos} color="textSecondary">
                  adjective
               </Typography>
               <Typography variant="body2" component="p">
                  well meaning and kindly.
               <br />
                  {'"a benevolent smile"'}
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">Learn More</Button>
            </CardActions>
         </Card>
      </Fragment>
   );
}