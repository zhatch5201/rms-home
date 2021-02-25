import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



const useStyles = makeStyles((theme) => ({
    root: {
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
    const [state, setState] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [eye, setEye] = React.useState('');
    const [hair, setHair] = React.useState('');

    const handleState = (event) => {
        setState(event.target.value);
    };
    const handleGender = (event) => {
        setGender(event.target.value);
    };
    const handleEye = (event) => {
        setEye(event.target.value);
    };
    const handleHair = (event) => {
        setHair(event.target.value);
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <h1>File a Person's Report</h1>
                <h2>Demographics</h2>
                <TextField required id="standard-required" label="Last Name" defaultValue="" />
                <TextField required id="standard-required" label="First Name" defaultValue="" />
                <TextField required id="standard-required" label="Middle Name or Initial" defaultValue="" />
                <br />
                <TextField
                    id="standard-number"
                    label="SSN"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                {/* placeholder until figure out what to do for license */}
                <TextField required id="standard-required" label="License" defaultValue="placeholder" />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state}
                        onChange={handleState}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="expDate"
                    label="Exp. Date"
                    type="date"
                    defaultValue="mm-dd-yyyy"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <TextField required id="standard-required" label="Race" defaultValue="" />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        onChange={handleGender}
                    >
                        <MenuItem value={'F'}>Female</MenuItem>
                        <MenuItem value={'M'}>Male</MenuItem>
                        <MenuItem value={'U'}>Unknown</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="standard-number"
                    label="Height"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-number"
                    label="Weight"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Eye Color</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={eye}
                        onChange={handleEye}
                    >
                        <MenuItem value={'F'}>Female</MenuItem>
                        <MenuItem value={'M'}>Male</MenuItem>
                        <MenuItem value={'U'}>Unknown</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Hair Color</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={hair}
                        onChange={handleHair}
                    >
                        <MenuItem value={'F'}>Female</MenuItem>
                        <MenuItem value={'M'}>Male</MenuItem>
                        <MenuItem value={'U'}>Unknown</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="DateofBirth"
                    label="Date of Birth"
                    type="date"
                    defaultValue="mm-dd-yyyy"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-number"
                    label="age"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <h3>Scars</h3>
                <TextareaAutosize
                    
                    rowsMin={5}
                    id="filled-full-width"
                    label="Narrative"
                    name="narrative"
                    style={{
                        margin: 8,
                        width: 300
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
                <br />
                <h2>Other Information</h2>
            </div>
        </form>
    );
}