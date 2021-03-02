import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <h1>Incidence Report (IR number here)</h1>
        <table>
          <tbody>
            <tr>
              <th>Time of Incident:</th>
              <td>(time)</td>
            </tr>
            <tr>
              <th>Incidence Type:</th>
              <td>(type)</td>
            </tr>
            <tr>
              <th>Location:</th>
              <td>(where)</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead><h2>People Involved</h2></thead>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>Last, First Middle</td>
            </tr>
            <tr>
              <th>Relation:</th>
              <td>blegh</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead><h2>Vehicles Involved</h2></thead>
          <tbody>
            <tr>
              <th>Vin#:</th>
              <td>00000000</td>
            </tr>
            <tr>
              <th>Make:</th>
              <td>blegh</td>
            </tr>
            <tr>
              <th>Model:</th>
              <td>blegh</td>
            </tr>
            <tr>
              <th>Number:</th>
              <td>blegh</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
      <CardActions>
        <Button size="small"><h3>Narrative . . .</h3></Button>
      </CardActions>
      <CardContent>
        <table>
          <tbody>
            <tr>
              <th>Reporting Officer:</th>
              <td>Pepepopo</td>
            </tr>
            <tr>
              <th>Badge Number:</th>
              <td>#</td>
            </tr>
            <tr>
              <th>Time of Filed Report:</th>
              <td>(time)</td>
            </tr>
          </tbody>
        </table>
      </CardContent>  
    </Card>
  );
}
