// ========================= Appbar ==============================
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { MenuIcon } from '@material-ui/data-grid';
// ========================= Appbar ==============================
// ========================= Buttons ============================
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from 'react-router-dom';
// ========================= Buttons ============================
// ========================= Sign In ============================
import firebase from 'firebase';
import admin from 'firebase-admin';
// ========================= Sign In ============================

const appBarStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(0.5)
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

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
         margin: theme.spacing(1),
      },
   },
   link: {
      color: 'white',
      textDecoration: 'none'
   }
}));





export default function NavigationBar() {
   // test
   let userName, user;
   var accessDate = new Date().toLocaleDateString();
   var accessTimeTime = new Date().toLocaleTimeString();
   const provider = new firebase.auth.GoogleAuthProvider();
   const authWithGoogle = () => {
      firebase.auth().signInWithPopup(provider);
   };

   const logout = () => {
      firebase.auth().signOut();
      console.log(firebase.auth().currentUser);
   };
   firebase.auth().onAuthStateChanged(() => {
      user = firebase.auth().currentUser;
      if (user) {
         userName = user.displayName;
         const userDocumentRef = firebase.firestore().collection('Users').doc(userName);
         console.log(`Coming after the ref... `, userDocumentRef);
         if (userDocumentRef.length > 0) {
            userDocumentRef.update({
               login_dates: admin.firestore.FieldValue.arrayUnion(`Logged in as: ${userName} on ${accessDate} at ${accessTimeTime}`)
            });
         } else {
            firebase.firestore().collection('Users').doc(userName).set({
               login_dates: admin.firestore.FieldValue.arrayUnion(`Logged in as: ${userName} on ${accessDate} at ${accessTimeTime}`),
               accessed_pages: [window.location.href]
            });
         }
      } else {
         return false;
      }
   });
   // test

   const app_bar_classes = appBarStyles();
   const button_classes = useStyles();

   return (
      <div className={app_bar_classes.root}>
         <AppBar position="static">
            <Toolbar>
               <IconButton edge="start" className={app_bar_classes.menuButton} color="inherit" aria-label="open drawer">
                  <MenuIcon />
               </IconButton>
               <Typography className={app_bar_classes.title} variant="h6" noWrap>
                  <Link to='/' className={button_classes.link}>West-MEC RMS</Link>
                  <Button onClick={authWithGoogle}>Login</Button>
                  <Button onClick={logout}>Logout</Button>
               </Typography>
               {/* ========================= Button Group ======================== */}

               {/* ========================= Button Group ======================== */}
               <div className={app_bar_classes.search}>
                  <div className={app_bar_classes.searchIcon}>
                     <SearchIcon />
                  </div>
                  <InputBase placeholder="Search…" classes={{ root: app_bar_classes.inputRoot, input: app_bar_classes.inputInput, }} inputProps={{ 'aria-label': 'search' }} />
               </div>
            </Toolbar>
         </AppBar >
      </div >
   );
}