// imports from Material-UI
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

// makes general styles
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
// styles for dropdown
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
    width: "100%",
  },
  th: {
    textAlign: "left"
  },
  td: {
    color: "#ffde9c",
    textAlign: "left",
  }
}));

export default function SimpleCard() {
  // uses general styles
  const classes = useStyles();
  // uses styles for dropdown
  const accordionClasses = accordionStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <h1>Vehicle Report</h1>
        {/* creates a section for vehicles */}
        <table>
          <tbody>
            {/* License Plate Number */}
            <tr>
              <th>License Plate #:</th>
              <td className={classes.td}>(number)</td>
            </tr>
            {/* State */}
            <tr>
              <th>State:</th>
              <td className={classes.td}>(state)</td>
            </tr>
            {/* Color of Vehicle */}
            <tr>
              <th>Color:</th>
              <td className={classes.td}>(color)</td>
            </tr>
            {/* Year */}
            <tr>
              <th>Year:</th>
              <td className={classes.td}>(year)</td>
            </tr>
            {/* Model */}
            <tr>
              <th>Model:</th>
              <td className={classes.td}>(model)</td>
            </tr>
            {/* Value */}
            <tr>
              <th>Value:</th>
              <td className={classes.td}>($)</td>
            </tr>
          </tbody>
        </table>
        <br />
        {/* Details of Vehicle */}
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
        <br />
        {/* Relations of vehicle */}
        <Accordion className={accordionClasses.bottom}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={accordionClasses.heading}>
              Relations
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
                    himenaeos. blegh
                  </td>
                </tr>
              </tbody>
            </table>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}
