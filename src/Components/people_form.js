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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        margin: 'auto',
        // margin: '2em auto',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
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
    var personObject = {
        // id: uuid(),
        // report_code: ,
        last_name: submittedForm.last_name,
        first_name: submittedForm.first_name,
        middle_name: submittedForm.middle_name,
        ssn: '',
        driver_license: {
            number: '',
            state: '',
            expiration: ''
        },
        hazard: '',
        demographic: {
            race: '',
            sex: '',
            height: '',
            weight: '',
            eye_color: '',
            hair_color: '',
            date_of_birth: '',
            age: '',
            special_features: {
                face: '',
                body: '',
                arms: ''
            }
        },
        address: '',
        phone_number: '',
        known_incidents: [],
        vehicles: [],
        gang_affiliated: '',
        mugshots: ''
    };

    const onSubmit = (data) => {
        submittedForm = data;
        console.log(`The form submitted was: `, submittedForm);
        // firebase.firestore().collection('People').doc(submittedForm.uuid).set(submittedForm);
    };
    // ========================= Zack's Stuff =========================
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <h1>File a Person's Report</h1>
                <h2>Demographics</h2>
                <TextField inputRef={register} required name="last_name" placeholder="Doe" label="Last Name" />
                <TextField inputRef={register} required name="first_name" placeholder="John" label="First Name" />
                <TextField inputRef={register} required name="middle_name" placeholder="F" label="Middle Name or Initial" />
                <br />
                <TextField inputRef={register} name="number" required label="License" placeholder="AZ#######" />
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
                <TextField
                    inputRef={register}
                    name="expiration"
                    id="expDate"
                    label="Exp. Date"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    inputRef={register}
                    name="ssn"
                    label="SSN"
                    type="number"
                />
                <br />
                <TextField inputRef={register} name="race" required label="Race" />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Controller as=
                        {<Select>
                            <MenuItem value={'F'}>Female</MenuItem>
                            <MenuItem value={'M'}>Male</MenuItem>
                            <MenuItem value={'U'}>Unknown</MenuItem>
                        </Select>}
                        control={control}
                        defaultValue="U"
                        name="sex"
                    />
                </FormControl>
                <TextField inputRef={register} name="height" label="Height" type="number" placeholder="###" />
                <TextField inputRef={register} name="weight" label="Weight" type="number" placeholder="###" />
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Eye Color</InputLabel>
                    <Controller as={
                        <Select>
                            <MenuItem value={'BRN'}>Brown</MenuItem>
                            <MenuItem value={'BLK'}>Black</MenuItem>
                            <MenuItem value={'BLU'}>Blue</MenuItem>
                        </Select>}
                        control={control}
                        defaultValue="BLU"
                        name="eye_color" />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Hair Color</InputLabel>
                    <Controller as=
                        {<Select>
                            <MenuItem value={'BRN'}>Brown</MenuItem>
                            <MenuItem value={'BLK'}>Black</MenuItem>
                            <MenuItem value={'BLN'}>Blonde</MenuItem>
                        </Select>}
                        control={control}
                        defaultValue="BLN"
                        name="hair_color" />
                </FormControl>
                <TextField inputRef={register} name="date_of_birth" id="DateofBirth" label="Date of Birth" type="date" className={classes.textField} InputLabelProps={{ shrink: true, }} />
                {/* <TextField inputRef={register} name="age" label="Age" type="number" InputLabelProps={{ shrink: true, }} /> */}
                {/* <br /> */}
                <h3>Features</h3>
                <TextareaAutosize
                    rowsMin={5}
                    id="filled-full-width"
                    label="Narrative"
                    name="features"
                    placeholder="Tattoos, scars, noticeable features"
                    style={{
                        margin: 8,
                        width: 200
                    }}
                    margin="normal"
                    variant="filled"
                />
                <br />
                <TextField inputRef={register} name="address" label="Home Address" placeholder="" />
                <TextField inputRef={register} name="number" label="Main Phone Number" type="number" placeholder="###" />
                <br />
                <h3>Relations</h3>
                <TextareaAutosize
                    rowsMin={5}
                    id="filled-full-width"
                    label="Relations"
                    name="relations"
                    placeholder=""
                    style={{
                        margin: 8,
                        width: 200
                    }}
                    margin="normal"
                    variant="filled"
                />
                {/* need a way to add mugshots */}
                <input type="file" accept="image/*" name="mugshot" id="mugshot" />
                {/* ^^ working on uploading and displaying a mugshot */}
                <br />
                <FormControlLabel
                    label="Gang Affiliation"
                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                />
                <FormControlLabel
                    label="Hazardous"
                    control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                />
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
                <input type="submit" />
                <br />
            </form>
        </>
    );
}