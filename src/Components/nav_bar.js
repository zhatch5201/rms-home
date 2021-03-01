import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    width: '500px',
    marginRight: `calc(1em + ${theme.spacing(20)}px)`,
    borderRadius: theme.shape.borderRadius,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const buttonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    background: 'rgba(100, 100, 100, 0.45)'
  },
  link: {
    // background: 'white',
    color: 'white',
    textDecoration: 'none'
  }
}));
export default function SearchAppBar() {
  const classes = useStyles();
  const button_classes = buttonStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>


          <div>
            <Link to="/"><img src={Logo} alt="rms-logo" width="400px" height="75px" /></Link>
          </div>

          <Typography className={classes.title} variant="h6" noWrap>
          </Typography>
          {/* <Paper className={classes.root} > */}
          <div className={button_classes.root}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button className={button_classes.button}><Link className={button_classes.link} to='/incidents'>Incidents</Link></Button>
              <Button className={button_classes.button}><Link className={button_classes.link} to='/people'>People</Link></Button>
              <Button className={button_classes.button}><Link className={button_classes.link} to='/vehicles'>Vehicles</Link></Button>
            </ButtonGroup>
          </div>
          {/* </Paper> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}