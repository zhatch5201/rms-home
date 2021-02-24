import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    Maxwidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    width: 250,
    marginLeft: 1100,
    border: 2,
    fontSize: 12,
    borderRadius: 10,
    boxShadow: theme.boxShadow,
    flexWrap: 'nowrap',
  },
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Code`} /><ListItemText primary={`Serial`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" className={classes.button}>
        New Incidence Form
    </Button>
      <FixedSizeList height={400} width={300} itemSize={45} itemCount={1}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}