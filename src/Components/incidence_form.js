import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
      setAge(event.target.value);
  };
  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField required id="standard-required" label="IR Number" defaultValue="Hello World" />
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
          <TextField required id="standard-required" label="Incident Type" defaultValue="Hello World" />
          <TextField required id="standard-required" label="Location" defaultValue="Hello World" />
          <TextField required id="standard-required" label="Last Name" defaultValue="Doe" />
          <TextField required id="standard-required" label="First Name" defaultValue="John" />
          <TextField required id="standard-required" label="Middle Name or Initial" defaultValue="" />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={relevance}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>


          {/* <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="standard-search" label="Search field" type="search" />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          /> */}
        </div>
        </form>
    );
}