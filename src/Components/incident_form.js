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

// general styling
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    backgroundColor: '#ff9900',
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
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    fontSize: 10,
    color: '#000',
      background: '#FFF',
      borderRadius: '5px',
      '&:hover': {
         backgroundColor: 'grey',
         color: '#FFF',
         boxShadow: '2px 3px 5px -1px grey'
      },
    padding: 10,
    //   width: 250,
    //   margin: 10,
    marginLeft: 10,
    //   border: 2,
    //   fontSize: 12,
    //   borderRadius: 10,
    //   flexWrap: 'nowrap',
  },
}));
// functions to add fields with buttons
function addperson() {
  let personHTML = `<br /><div class="MuiFormControl-root MuiTextField-root"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><input id="pepe" aria-invalid="false" name="LastName" placeholder="Doe" required="" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="MuiFormControl-root MuiTextField-root"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><input id="pepe" aria-invalid="false" name="FirstName" placeholder="John" required="" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="MuiFormControl-root MuiTextField-root"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><input id="pepe" aria-invalid="false" name="MiddleName" placeholder="A." required="" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="MuiFormControl-root makeStyles-formControl-15"><select><option inputtype="Radio" name="RP" value="RP">RP</option><option inputtype="Radio" name="W" value="W">W</option><option inputtype="Radio" name="V" value="V">V</option><option inputtype="Radio" name="IL" value="IL">IL</option><option inputtype="Radio" name="S" value="S">S</option></select></div>`;
  let peopleDiv = document.getElementById('people');
  return peopleDiv.insertAdjacentHTML("beforeend", personHTML);
}
function addvehicle() {
  let vehicleHTML = `<br /><div class="MuiFormControl-root MuiTextField-root"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><input id="pepe" aria-invalid="false" name="VinNumber" placeholder="1HGBH41JXMN109186" required="" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="MuiFormControl-root MuiTextField-root"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><input id="pepe" aria-invalid="false" name="Make" placeholder="Ford" required="" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="MuiFormControl-root MuiTextField-root"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><input id="pepe" aria-invalid="false" name="Model" placeholder="Crown Victoria" required="" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="MuiFormControl-root makeStyles-formControl-15"><input type="number" pattern="[0-9][0-9][0-9][0-9]"></div>`;
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
    var incident = {
      general: {
        ir_number: submittedForm.id,
        occ_date: submittedForm.time_of_incident,
        occ_type: submittedForm.incident_type,
        location: submittedForm.Location,
      },
      people: [{
        person: {
          last_name: submittedForm.LastName,
          first_name: submittedForm.FirstName,
          middle_name: submittedForm.MiddleName,
          relevance: submittedForm.relevance
        },
      }],
      vehicles_involved: [{
          vehicle: {
            vin: submittedForm.VinNumber,
            make: submittedForm.Make,
            model: submittedForm.Model,
            year: submittedForm.vehicle_year
          }
      }],
      narrative: submittedForm.narrative,
      officer: {
        officer_name: submittedForm.Reporting_Officer,
        officer_num: submittedForm.BadgeNumber
      },
      paperwork: {
        submit_time: 'submittedForm.TimeofFiledReport'
      }
    }
    submittedForm = data;
    console.log(`The form submitted was: `, submittedForm);
    firebase.firestore().collection('Incidents').doc(submittedForm.id).set(submittedForm);
    alert(`Submitted!`);
    window.location.pathname = window.location.pathname;
  };
  // ========================= Zack's Stuff =========================

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <h1>Report an Incident</h1>
      {/* creates a section for information on incident */}
      <div>
        <TextField id="pepe" inputRef={register} name="id" value={IR_Number()} label="IR Number (Readonly)" type="string" InputLabelProps={{ shrink: true, }} />
        <TextField id="pepe" inputRef={register} name="time_of_incident" label="Time of Incident" type="datetime-local" defaultValue="YYYY-MM-DDT" className={classes.textField} InputLabelProps={{ shrink: true, }} />
        <TextField id="pepe" inputRef={register} required name="incident_type" label="Incident Type" defaultValue="" />
        <TextField id="pepe" inputRef={register} required name="Location" label="Location" defaultValue="" />
      </div>
      <h2>People Involved<Button onClick={addperson} variant="contained" color="primary" className={classes.button}>New Person</Button></h2>
      <div id="people">
        <TextField id="pepe" inputRef={register} label="Last Name" name="LastName" placeholder="Doe" />
        <TextField id="pepe" inputRef={register} label="First Name" name="FirstName" placeholder="John" />
        <TextField id="pepe" inputRef={register} label="Middle Name or Initial" name="MiddleName" placeholder="A." />
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
      <h2>Vehicle Involved<Button onClick={addvehicle} variant="contained" color="primary" className={classes.button}>New Vehicle</Button></h2>
      <div id="vehicle">
        <TextField id="pepe" inputRef={register} label="Vin Number" name="VinNumber" placeholder="1HGBH41JXMN109186" pattern='[0-9]^[A-Z]{1,17}$' />
        <TextField id="pepe" inputRef={register} label="Make" name="Make" placeholder="Ford" />
        <TextField id="pepe" inputRef={register} label="Model" name="Model" placeholder="Crown Victoria" />
        <FormControl className={classes.formControl}>
          Year
          <input type="number" ref={register} name="vehicle_year" pattern="[0-9]{4}" />
        </FormControl>
      </div>
      <h2>Narrative</h2>
      {/* section for narrative */}
      <div>
        <TextareaAutosize
          ref={register}
          rowsMin={10}
          id="filled-full-width"
          label="Narrative"
          name="narrative"
          style={{
            margin: 8,
            width: '25vw',
            fontSize: '1em',
            height: 150
          }}
          placeholder=""
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </div>
      <h2>Signature</h2>
      {/* section for officer to sign off on report */}
      <div>
        <TextField id="pepe" inputRef={register} required name="Reporting Officer" label="Reporting Officer" defaultValue="" />
        <TextField
          id="pepe"
          inputRef={register}
          name="BadgeNumber"
          label="Badge Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="pepe"
          inputRef={register}
          name="TimeofFiledReport"
          label="Time of Filed Report"
          type="datetime-local"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <input type="submit" />
    </form >
  );
}