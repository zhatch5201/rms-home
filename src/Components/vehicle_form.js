import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import Checkbox from '@material-ui/core/Checkbox';
// ========================= Zack's Stuff =========================
// import { uuid } from 'uuidv4';
import { useForm, Controller } from 'react-hook-form';
import firebase from 'firebase';
// ========================= Zack's Stuff =========================


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
    minWidth: 120,

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    color: '#000',
      background: '#FFF',
      borderRadius: '5px',
      '&:hover': {
         backgroundColor: 'grey',
         color: '#FFF',
         boxShadow: '2px 3px 5px -1px grey'
      },
    width: 250,
    margin: 10,
    marginLeft: 30,
    border: 2,
    fontSize: 12,
    borderRadius: 10,
    flexWrap: 'nowrap',
  },
}));
function addvehicle() {
  let vehicleHTML = `<textarea rows="10" id="filled-full-width" label="Vehicle Details" name="Vehicle Details" placeholder="" helpertext="" margin="normal" inputlabelprops="[object Object]" variant="filled" style="margin: 4px; width: 300px; height: 150px;"></textarea><textarea aria-hidden="true" readonly="" tabindex="-1" style="visibility: hidden; position: absolute; overflow: hidden; height: 0px; top: 0px; left: 0px; transform: translateZ(0px); margin: 4px; width: 300px;"></textarea>`;
  let vehicleDiv = document.getElementById('vehicle');
  return vehicleDiv.insertAdjacentHTML("beforeend", vehicleHTML);
}
export default function FormPropsTextFields() {
  let submittedForm;
  const classes = useStyles();

  // ========================= Zack's Stuff =========================

  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    var vehicle = {
        license_plate: submittedForm.lp,
        state: submittedForm.state,
        vin_num: submittedForm.VinNumber,
        veh_color: submittedForm.vehicle_color,
        veh_make: submittedForm.Make,
        veh_model: submittedForm.Model,
        veh_year: submittedForm.Year,
        veh_details: submittedForm.Vehicle_Details,
        veh_value: submittedForm.Value,
        veh_relation: submittedForm.Vehicle_Relations
    }
    submittedForm = data;
    console.log(`The form submitted was: `, submittedForm);
    firebase.firestore().collection('Incidents').doc(submittedForm.uuid).set(submittedForm);
  };
  // ========================= Zack's Stuff =========================

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <h1>File a Vehicle</h1>
      <div>
        <TextField inputRef={register} required id="standard-required" label="Liscense Plate" name="lp" placeholder="1HGBH4" pattern='[0-9]^[A-Z]{1,7}$' />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Controller as={
            <Select>
              <MenuItem value='AZ'>AZ</MenuItem>
              <MenuItem value='CA'>CA</MenuItem>
              <MenuItem value='TX'>TX</MenuItem>
            </Select>}
            control={control}
            defaultValue="AZ"
            name="state" />
        </FormControl>
        <TextField inputRef={register} required id="standard-required" label="Vin Number" name="VinNumber" placeholder="1HGBH41JXMN109186" pattern='[0-9]^[A-Z]{1,17}$' />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Vehicle Color</InputLabel>
          <Controller as={
            <Select>
              <MenuItem value={'BRN'}>Brown</MenuItem>
              <MenuItem value={'BLK'}>Black</MenuItem>
              <MenuItem value={'BLU'}>Blue</MenuItem>
            </Select>}
            control={control}
            name="vehicle_color" />
        </FormControl>
        <TextField inputRef={register} required id="standard-required" label="Make" name="Make" placeholder="Ford" />
        <TextField inputRef={register} required id="standard-required" label="Model" name="Model" placeholder="Crown Victoria" />
        <FormControl className={classes.formControl}>
          <InputLabel name="Year" id="demo-simple-select-label"></InputLabel>
          <h10>Year</h10>
          <input type="number" pattern="[0-9]{1,4}" />
        </FormControl>
      </div>
      <h2>Vehicle Details
    <Button onClick={addvehicle} variant="contained" color="primary" className={classes.button}>
          New Vehicle Details
    </Button>
      </h2>

      <div id="vehicle">
        <TextareaAutosize
          ref={register}
          rowsMin={10}
          id="filled-full-width"
          label="Vehicle Details"
          name="Vehicle_Details"
          style={{
            margin: 4,
            width: 300,
            flexWrap: 'nowrap',
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

      <br />

      <FormControl className={classes.formControl}>
        <InputLabel name="Value" id="demo-simple-select-label"></InputLabel>
        <h10>Value</h10>
        <input type="number" pattern="[0-9]{1,8}" />
      </FormControl>

      <br />

      <h2>Vehicle Relations</h2>
      <div>
        <TextareaAutosize
          ref={register}
          rowsMin={10}
          id="filled-full-width"
          label="Vehicle Relations"
          name="Vehicle_Relations"
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
      <input type="submit" />
    </form>
  );
}