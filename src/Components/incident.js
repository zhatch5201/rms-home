// ==================== Imports from Material-UI ===================
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { fromString } from "uuidv4";

// general styles

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

export default function IncidentCard() {
  // uses general styles
  const accordionClasses = accordionStyles();

  let incident_query_raw = window.location.pathname.toString();
  // console.log(incident_query_raw);
  const incident_query = incident_query_raw.substring(incident_query_raw.length - 36, incident_query_raw.length);
  // console.log(incident_query);
  const classes = cardStyles();
  // Has to load whole People collection to get random person... for now...
  const [Incident, setIncident] = useState();
  const [loading, setLoading] = useState(true);
  const ref = firebase.firestore().collection("Incident");
  // var person;
  async function getIncident() {
     const doc = await ref.doc(incident_query).get();
     setIncident(doc.data());
     setLoading(false);
     return doc.data();
  }
  useEffect(() => {
     getIncident();
  }, []);

  if (loading) {
     return (<h1>Loading...</h1>);
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <h1>Incident Report (IR number here) <h1>{`${Incident.id}`}</h1></h1>
        <table>
          {/* creates a table for info on incident */}
          <tbody>
            <tr>
              <th>Time of Incident:</th>
              <td className={classes.td}>(time)</td>
            </tr>
            <tr>
              <th>Incidence Type:</th>
              <td className={classes.td}>(type)</td>
            </tr>
            <tr>
              <th>Location:</th>
              <td className={classes.td}>(where)</td>
            </tr>
          </tbody>
        </table>
        <table>
          {/* creates a table for info on people in incident */}
          <thead>
            <h2>People Involved</h2>
          </thead>
          <tbody>
            <tr>
              <th>Name:</th>
              <td className={classes.td}>Last, First Middle</td>
            </tr>
            <tr>
              <th>Relation:</th>
              <td className={classes.td}>blegh</td>
            </tr>
          </tbody>
        </table>
        <table>
          {/* creates a table for info on vehicles in incident */}
          <thead>
            <h2>Vehicles Involved</h2>
          </thead>
          <tbody>
            <tr>
              <th>Vin#:</th>
              <td className={classes.td}>00000000</td>
            </tr>
            <tr>
              <th>Make:</th>
              <td className={classes.td}>blegh</td>
            </tr>
            <tr>
              <th>Model:</th>
              <td className={classes.td}>blegh</td>
            </tr>
            <tr>
              <th>Number:</th>
              <td className={classes.td}>blegh</td>
            </tr>
          </tbody>
        </table>
        <br/>
        {/* dropdown for narrative */}
        <Accordion className={accordionClasses.bottom}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={accordionClasses.heading}>
              Narrative . . .
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <table className={accordionClasses.table}>
              <tbody>
                <tr>
                  <td className={accordionClasses.td}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam iaculis interdum condimentum. Donec tempor nisl vel
                    tempus tincidunt. Integer finibus vulputate laoreet. Aliquam
                    in massa vel sem pulvinar semper eu nec justo. Vestibulum
                    vestibulum lectus eget felis laoreet, sed vehicula risus
                    scelerisque. Cras ac placerat mi. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos.
                  </td>
                </tr>
              </tbody>
            </table>
          </AccordionDetails>
        </Accordion>
        <br/>
        <table>
          {/* table for officer that made report */}
          <tbody>
            <tr>
              <th>Reporting Officer:</th>
              <td className={classes.td}>Pepepopo</td>
            </tr>
            <tr>
              <th>Badge Number:</th>
              <td className={classes.td}>#</td>
            </tr>
            <tr>
              <th>Time of Filed Report:</th>
              <td className={classes.td}>(time)</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
