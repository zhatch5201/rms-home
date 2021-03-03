import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import { TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
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
  button: {
    width: 250,
    margin: 10,
    marginLeft: 1090,
    border: 2,
    fontSize: 12,
    borderRadius: 10,
    flexWrap: 'nowrap',
  },
}));
function addperson() {
  let personHTML = `<br /><div class="MuiFormControl-root MuiTextField-root"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><input aria-invalid="false" id="standard-required" name="LastName" placeholder="Doe" required="" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="MuiFormControl-root MuiTextField-root"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><input aria-invalid="false" id="standard-required" name="FirstName" placeholder="John" required="" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="MuiFormControl-root MuiTextField-root"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><input aria-invalid="false" id="standard-required" name="MiddleName" placeholder="A." required="" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="MuiFormControl-root makeStyles-formControl-15"><select><option inputtype="Radio" name="RP" value="RP">RP</option><option inputtype="Radio" name="W" value="W">W</option><option inputtype="Radio" name="V" value="V">V</option><option inputtype="Radio" name="IL" value="IL">IL</option><option inputtype="Radio" name="S" value="S">S</option></select></div>`;
  let peopleDiv = document.getElementById('people');
  return peopleDiv.insertAdjacentHTML("beforeend", personHTML);
}
function addvehicle() {
  let vehicleHTML = `<br /><div class="MuiFormControl-root MuiTextField-root"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><input aria-invalid="false" id="standard-required" name="VinNumber" placeholder="1HGBH41JXMN109186" required="" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="MuiFormControl-root MuiTextField-root"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><input aria-invalid="false" id="standard-required" name="Make" placeholder="Ford" required="" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="MuiFormControl-root MuiTextField-root"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><input aria-invalid="false" id="standard-required" name="Model" placeholder="Crown Victoria" required="" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="MuiFormControl-root makeStyles-formControl-15"><input type="number" pattern="[0-9][0-9][0-9][0-9]"></div>`;
  let vehicleDiv = document.getElementById('vehicle');
  return vehicleDiv.insertAdjacentHTML("beforeend", vehicleHTML);
}
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
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <h1>Report an Incident</h1>
      <div>
        <TextField inputRef={register} name="id" id="standard-number" value={IR_Number()} label="IR Number (Readonly)" type="string" InputLabelProps={{ shrink: true, }} />
        <TextField inputRef={register} id="datetime-local" name="TimeofIncident" label="Time of Incident" type="datetime-local" defaultValue="YYYY-MM-DDT" className={classes.textField} InputLabelProps={{ shrink: true, }} />
        <TextField inputRef={register} required id="standard-required" name="IncidentType" label="Incident Type" defaultValue="" />
        <TextField inputRef={register} required id="standard-required" name="Location" label="Location" defaultValue="" />
      </div>
      <h2>People Involved</h2>
      <div id="people">
        <TextField inputRef={register} required id="standard-required" label="Last Name" name="LastName" placeholder="Doe" />
        <TextField inputRef={register} required id="standard-required" label="First Name" name="FirstName" placeholder="John" />
        <TextField inputRef={register} required id="standard-required" label="Middle Name or Initial" name="MiddleName" placeholder="A." />
        <FormControl className={classes.formControl}>
          <InputLabel name="relevance" id="demo-simple-select-label"></InputLabel>
          <select>
            <option inputType="Radio" name="RP" value="RP">RP</option>
            <option inputType="Radio" name="W" value="W">W</option>
            <option inputType="Radio" name="V" value="V">V</option>
            <option inputType="Radio" name="IL" value="IL">IL</option>
            <option inputType="Radio" name="S" value="S">S</option>
          </select>
        </FormControl>
      </div>
      <div>
        <Button onClick={addperson} variant="contained" color="primary" className={classes.button}>
          New Person
    </Button>
      </div>
      <h2>Vehicle Involved</h2>
      <div id="vehicle">
        <TextField inputRef={register} required id="standard-required" label="Vin Number" name="VinNumber" placeholder="1HGBH41JXMN109186" pattern='[0-9]^[A-Z]{1,17}$' />
        <TextField inputRef={register} required id="standard-required" label="Make" name="Make" placeholder="Ford" />
        <TextField inputRef={register} required id="standard-required" label="Model" name="Model" placeholder="Crown Victoria" />
        <FormControl className={classes.formControl}>
          <InputLabel name="Year" id="demo-simple-select-label"></InputLabel>
          <h10>Year</h10>
          <input type="number" pattern="[0-9]{4}" />
        </FormControl>
      </div>
      <div>
        <Button onClick={addvehicle} variant="contained" color="primary" className={classes.button}>
          New Vehicle
    </Button>
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
          label="Time of Filed Report"
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