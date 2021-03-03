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

const useStyles = makeStyles({
  root: {
    background: "#ffb938",
    color: "amber",
    minWidth: 275,
    // maxWidth: "33vw",
    margin: "5vw auto"
  },
  img: {
    // position: 'absolute',
    // transform: 'translateY(-90px) translateX(300%)'
  },
  h4: {
    width: "100%",
    textAlign: "center",
    margin: "-19px 0px 0px 0px"
  },
  td: {
    color: "#704019",
    textAlign: "right"
  }
});
const accordionStyles = makeStyles((theme) => ({
  bottom: {
    background: "#8f774a"
    // width: '100px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  table: {
    width: "100%"
  },
  th: {
    textAlign: "left"
  },
  td: {
    color: "#ffde9c",
    textAlign: "left"
  }
}));

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const accordionClasses = accordionStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <h1>Incidence Report (IR number here)</h1>
        <table>
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
        <Accordion className={accordionClasses.bottom}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={accordionClasses.heading}>
              Details
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
