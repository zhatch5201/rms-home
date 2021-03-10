import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// Zack
import { useForm, Controller } from 'react-hook-form';
// import uuid from 'uuidv4';
// import firebase from 'firebase';
// import { Hidden } from '@material-ui/core';
// Zack

function addFeatures(){
    let featuresHTML = `
    <textarea rows="5" id="filled-full-width" label="Narrative" name="features" placeholder="Tattoos, scars, noticeable features" margin="normal" variant="filled" style="margin: 8px; width: 200px; height: 75px;"></textarea>`;
    let featuresDiv = document.getElementById("featuresDiv");
    return featuresDiv.insertAdjacentHTML("beforeend", featuresHTML);
}
function removeFeature(){
    let featuresHTML = `
    <textarea rows="5" id="filled-full-width" label="Narrative" name="features" placeholder="Tattoos, scars, noticeable features" margin="normal" variant="filled" style="margin: 8px; width: 200px; height: 75px;"></textarea>`;
    let featuresDiv = document.getElementById("featuresDiv");
    return 
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '73vw',
        margin: 'auto',
        // margin: '2em auto',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        backgroundColor: '#ff9900',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
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

}));

export default function FormPropsTextFields() {
    const classes = useStyles();
    // ========================= Zack's Stuff =========================
    const { register, handleSubmit, control } = useForm();
    let submittedForm;

    const onSubmit = (data) => {
        var person = {
            // id: uuid(),
            // report_code: ,
            last_name: submittedForm.last_name,
            first_name: submittedForm.first_name,
            middle_name: submittedForm.middle_name,
            ssn: submittedForm.ssn,
            driver_license: {
                number: submittedForm.number,
                state: submittedForm.state,
                expiration: submittedForm.expiration
            },
            hazard: submittedForm.hazard,
            demographic: {
                race: submittedForm.race,
                sex: submittedForm.sex,
                height: submittedForm.height,
                weight: submittedForm.weight,
                eye_color: submittedForm.eye_color,
                hair_color: submittedForm.hair_color,
                date_of_birth: submittedForm.date_of_birth,
                age: submittedForm.age,
                special_features: [{
                    features: submittedForm.feautres,
                }]
            },
            address: submittedForm.address,
            phone_number: submittedForm.number,
            known_incidents: [{
                incident: submittedForm.known_incidents,
            }],
            vehicles: [{
                vehicles: submittedForm.vehicles,
            }],
            gang_affiliated: submittedForm.gang,
            mugshots: submittedForm.mugshot
        };
        submittedForm = data;
        console.log(`The form submitted was: `, submittedForm);
        // firebase.firestore().collection('People').doc(submittedForm.uuid).set(submittedForm);
    };
    // ========================= Zack's Stuff =========================
    const [state, setState] = React.useState({
        gang: true,
        hazard: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <h1>File a Person's Report</h1>
                <h2>Demographics</h2>
                {/* last name */}
                <TextField id="pepe" inputRef={register} required name="last_name" placeholder="Doe" label="Last Name" />
                {/* first name */}
                <TextField id="pepe" inputRef={register} required name="first_name" placeholder="John" label="First Name" />
                {/* middle name/initial */}
                <TextField id="pepe" inputRef={register} required name="middle_name" placeholder="F" label="Middle Name or Initial" />
                <br />
                {/* license plate number */}
                <TextField id="pepe" inputRef={register} name="number" required label="License" placeholder="AZ#######" />
                {/* state where license issued */}
                <FormControl className={classes.formControl}>
                    <InputLabel id="pepe">State</InputLabel>
                    <Controller as={
                        <Select id="pepe">
                            <MenuItem value='AZ'>AZ</MenuItem>
                            <MenuItem value='CA'>CA</MenuItem>
                            <MenuItem value='TX'>TX</MenuItem>
                        </Select>}
                        control={control}
                        defaultValue="AZ"
                        name="state" />
                </FormControl>
                {/* license exp date */}
                <TextField
                    inputRef={register}
                    name="expiration"
                    id="expDate"
                    label={<h5>Exp. Date</h5>}
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {/* social security number */}
                <TextField
                    id="pepe"
                    inputRef={register}
                    name="ssn"
                    label={<h5>SSN</h5>}
                    type="number"
                />
                <br />
                {/* Race */}
                <TextField id="pepe" inputRef={register} name="race" required label="Race" />
                {/* Gender */}
                <FormControl className={classes.formControl}>
                    <InputLabel id="pepe">Gender</InputLabel>
                    <Controller as=
                        {<Select id="pepe">
                            <MenuItem value={'F'}>Female</MenuItem>
                            <MenuItem value={'M'}>Male</MenuItem>
                            <MenuItem value={'U'}>Unknown</MenuItem>
                        </Select>}
                        control={control}
                        defaultValue="U"
                        name="sex"
                    />
                </FormControl>
                {/* Height */}
                <TextField id="pepe"inputRef={register} name="height" label="Height" type="number" placeholder="###" />
                {/* Weight */}
                <TextField id="pepe"inputRef={register} name="weight" label="Weight" type="number" placeholder="###" />
                <br />
                {/* Eye Color */}
                <FormControl className={classes.formControl}>
                    <InputLabel id="pepe">Eye Color</InputLabel>
                    <Controller as={
                        <Select id="pepe">
                            <MenuItem value={'BRN'}>Brown</MenuItem>
                            <MenuItem value={'BLK'}>Black</MenuItem>
                            <MenuItem value={'BLU'}>Blue</MenuItem>
                        </Select>}
                        control={control}
                        defaultValue="BLU"
                        name="eye_color" />
                </FormControl>
                {/* Hair Color */}
                <FormControl className={classes.formControl}>
                    <InputLabel id="pepe">Hair Color</InputLabel>
                    <Controller as=
                        {<Select id="pepe">
                            <MenuItem value={'BRN'}>Brown</MenuItem>
                            <MenuItem value={'BLK'}>Black</MenuItem>
                            <MenuItem value={'BLN'}>Blonde</MenuItem>
                        </Select>}
                        control={control}
                        defaultValue="BLN"
                        name="hair_color" />
                </FormControl>
                {/* Date of Birth */}
                <TextField inputRef={register} name="date_of_birth" id="DateofBirth" label="Date of Birth" type="date" className={classes.textField} InputLabelProps={{ shrink: true, }} />
                {/* <TextField inputRef={register} name="age" label="Age" type="number" InputLabelProps={{ shrink: true, }} /> */}
                {/* <br /> */}
                <h3>Features</h3>
                <div id="featuresDiv">
                    {/* Features */}
                <TextareaAutosize
                    rowsMin={5}
                    id="filled-full-width"
                    label={<h5>Features</h5>}
                    name="features"
                    placeholder="Tattoos, scars, noticeable features"
                    style={{
                        margin: 8,
                        width: 200
                    }}
                    margin="normal"
                    variant="filled"
                />
                </div>
                {/* To add a new features box */}
                <button onClick={addFeatures} variant="contained" color="primary" className={classes.button}>New Feature</button>
                <br />
                {/* Home address */}
                <TextField id="pepe" inputRef={register} name="address" label="Home Address" placeholder="" />
                {/* Phone Number */}
                <TextField id="pepe" inputRef={register} name="number" label="Main Phone Number" type="number" placeholder="###" />
                <br />
                <h3>Known Incidents</h3>
                {/* Desc of known incidents */}
                <TextareaAutosize
                    rowsMin={5}
                    id="filled-full-width"
                    label="Known Incidents"
                    name="known_incidents"
                    placeholder=""
                    style={{
                        margin: 8,
                        width: 200
                    }}
                    margin="normal"
                    variant="filled"
                />
                <h3>Vehicles</h3>
                {/* owned vehicles */}
                <TextareaAutosize
                    rowsMin={5}
                    id="filled-full-width"
                    label="Vehicles"
                    name="vehicles"
                    placeholder=""
                    style={{
                        margin: 8,
                        width: 200
                    }}
                    margin="normal"
                    variant="filled"
                />
                <h3>Mugshot</h3>
                <br/>
                {/* for uploading a mugshot */}
                <input type="file" accept="image/*" name="mugshot" id="mugshot" />
                {/* ^^ working on uploading and displaying a mugshot */}
                <br />
                {/* Desc of Hazard */}
                <TextareaAutosize
                    rowsMin={5}
                    id="filled-full-width"
                    label="Hazardous cont."
                    name="hazardDesc"
                    placeholder="Description of Hazard"
                    style={{
                        margin: 8,
                        width: 200,
                        // visibility: 'hidden' want to make it hidden until hazard box is checked
                    }}
                    margin="normal"
                    variant="filled"
                />
                <br />
                {/* Gang Affiliation */}
                <FormControlLabel
                    label="Gang Affiliation"
                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="gang" />}
                />
                {/* Hazardous checkbox */}
                <FormControlLabel
                    label="Hazardous"
                    control={<Checkbox checked={state.checkedB} onChange={handleChange} name="hazard" />}
                />
                <br />
                <input type="submit" />
                <br />
            </form>
        </>
    );
}