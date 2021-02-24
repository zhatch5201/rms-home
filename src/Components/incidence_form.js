import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextareaAutosize } from '@material-ui/core';
// ========================= Zack's Stuff =========================
import { uuid } from 'uuidv4';
import { useForm } from 'react-hook-form';
import firebase from 'firebase';
// ========================= Zack's Stuff =========================


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
  let submittedForm;
  const classes = useStyles();

  // ========================= Zack's Stuff =========================
  const IR_Number = () => {
    let year = new Date().getFullYear();
    // console.log(year.getFullYear());
    let id = uuid(1);
    return `${year}:${id}`;
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    submittedForm = data;
    console.log(`The form submitted was: `, submittedForm);
    firebase.firestore().collection('Incidents').doc(submittedForm.uuid).set(submittedForm);
  };
  // ========================= Zack's Stuff =========================

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <h1>Report an Incident</h1>
      <div>
        <TextField inputRef={register} name="uuid" id="standard-number" value={IR_Number()} label="IR Number (Readonly)" type="string" InputLabelProps={{ shrink: true, }} />
        <TextField inputRef={register} id="datetime-local" name="TimeofIncident" label="Time of Incident" type="datetime-local" defaultValue="YYYY-MM-DDT" className={classes.textField} InputLabelProps={{ shrink: true, }} />
        <TextField inputRef={register} required id="standard-required" name="IncidentType" label="Incident Type" defaultValue="" />
        <TextField inputRef={register} required id="standard-required" name="Location" label="Location" defaultValue="" />
      </div>
      <h2>People Involved</h2>
      <div>
        <TextField inputRef={register} required id="standard-required" label="Last Name" name="LastName" placeholder="Doe" />
        <TextField inputRef={register} required id="standard-required" label="First Name" name="FirstName" placeholder="John" />
        <TextField inputRef={register} required id="standard-required" label="Middle Name or Initial" name="MiddleName" placeholder="A." />
        <FormControl className={classes.formControl}>
          <InputLabel name="relevance" id="demo-simple-select-label">Relevance</InputLabel>
          <Select
            name="relevance"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem name="RP" value="RP">RP</MenuItem>
            <MenuItem name="W" value="W">W</MenuItem>
            <MenuItem name="V" value="V">V</MenuItem>
            <MenuItem name="IL" value="IL">IL</MenuItem>
            <MenuItem name="S" value="S">S</MenuItem>
          </Select>
        </FormControl>
      </div>
      <h2>Narrative</h2>
      <div>
        <TextareaAutosize
          ref={register}
          rowsMin={10}
          id="filled-full-width"
          label="Narrative"
          name="narrative"
          style={{
            margin: 8,
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
        <TextField inputRef={register} required name="Reporting Officer" id="standard-required" label="Reporting Officer" defaultValue="" />
        <TextField
          inputRef={register}
          id="standard-number"
          name="BadgeNumber"
          label="Badge Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          inputRef={register}
          name="TimeofFiledReport"
          id="datetime-local"
          label="TimeofFiledReport"
          type="datetime-local"
          defaultValue="YYYY-MM-DDT"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <input type="submit" />
    </form>
  );
}