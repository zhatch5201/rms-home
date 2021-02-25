import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Vin, LP, Make, Model, Year) {
  return { Vin, LP, Make, Model, Year };
}

const rows = [
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  button: {
    width: 250,
    margin: 10,
    marginLeft: 1090,
    border: 2,
    fontSize: 12,
    borderRadius: 10,
    flexWrap: 'nowrap',
  },
});
export default function CustomizedTables() {
  const classes = useStyles();
        
  return (
    
    <TableContainer component={Paper}>
      
      <Button variant="contained" color="primary" className={classes.button}>
        New Vehicle Form
    </Button>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Vin Number</StyledTableCell>
            <StyledTableCell align="right">Liscense Plate</StyledTableCell>
            <StyledTableCell align="right">Make</StyledTableCell>
            <StyledTableCell align="right">Model</StyledTableCell>
            <StyledTableCell align="right">Year</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Vin}>
              <StyledTableCell component="th" scope="row">
                {row.Vin}
              </StyledTableCell>
              <StyledTableCell align="right">{row.LP}</StyledTableCell>
              <StyledTableCell align="right">{row.Make}</StyledTableCell>
              <StyledTableCell align="right">{row.Model}</StyledTableCell>
              <StyledTableCell align="right">{row.Year}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}