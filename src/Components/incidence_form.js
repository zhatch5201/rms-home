import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function FormPropsTextFields() {
    const classes = useStyles();
    const [relevance, setRelevance] = React.useState('');

    const handleChange = (event) => {
      setRelevance(event.target.value);
  };
  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <h1>Report on Incident</h1>
        <div>
        <TextField
            id="standard-number"
            label="Badge Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="datetime-local"
            label="Time of Incident"
            type="datetime-local"
            defaultValue="YYYY-MM-DDT"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField required id="standard-required" label="Incident Type" defaultValue="" />
          <TextField required id="standard-required" label="Location" defaultValue="" />
        </div>
        <h2>Suspects</h2>
        <div>
          <TextField required id="standard-required" label="Last Name" defaultValue="Doe" />
          <TextField required id="standard-required" label="First Name" defaultValue="John" />
          <TextField required id="standard-required" label="Middle Name or Initial" defaultValue="A." />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Relevance</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={relevance}
              onChange={handleChange}
            >
              <MenuItem value={"RP"}>RP</MenuItem>
              <MenuItem value={"W"}>W</MenuItem>
              <MenuItem value={"V"}>V</MenuItem>
              <MenuItem value={"IL"}>IL</MenuItem>
              <MenuItem value={"S"}>S</MenuItem>
            </Select>
          </FormControl>
        </div>
        <h2>Narrative</h2>
        <div>
        <TextareaAutosize rowsMin={10}
          id="filled-full-width"
          label="Narrative"
          style={{ 
            margin: 8 ,
            width: 1000
          }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        </div>
        <h2>Signature</h2>
        <div>
          <TextField required id="standard-required" label="Reporting Officer" defaultValue=""/>
          <TextField
            id="standard-number"
            label="Badge Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="datetime-local"
            label="Time of Filed Report"
            type="datetime-local"
            defaultValue="YYYY-MM-DDT"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        </form>
    );
}