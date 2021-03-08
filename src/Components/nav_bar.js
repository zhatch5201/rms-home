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
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  app: {
    backgroundColor: '#FFFFFF',

  },

  nav: {
    width: '450px',
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
    background: '#ff9900',
    // borderRadius: '15px',
    '&:hover': {
      backgroundColor: '#ff9800',
      color: '#ab003c'
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
  buu: {
    background: '#ffffff00',
    marginRight: 150,
    width: 320,
  },
  button: {
    fontSize: 15,
    background: '#ff9900',
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: '#ff9800',
      color: '#ab003c'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    background: '#ff9900',
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: '#ff9800',
      color: '#ab003c'
    }
  }
}));
export default function SearchAppBar() {
  const classes = useStyles();
  const button_classes = buttonStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.app} position="static">
        <Toolbar >


          <div>
            <Link to="/"><img src={Logo} alt="rms-logo" width="400px" height="75px" /></Link>
          </div>

          <Typography className={classes.title} variant="h6" noWrap>
          </Typography>
          {/* <Paper className={classes.root} > */}
          <div className={button_classes.root}>
            <ButtonGroup className={button_classes.buu} variant="contained" color="#000" aria-label="contained primary button group">
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