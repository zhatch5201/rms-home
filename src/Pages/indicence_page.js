import React from 'react';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)' ,
    borderRadius: 10,
    border: 5,
    color: 'white',
    height: 100,
    width: 250,
    padding: '0 30px',
    marginTop: 225,
    marginLeft: 275,
    fontSize: 20,
  },
}

export default function DynamicInlineStyle() {
  const [color] = React.useState('default');


  return (
    <React.Fragment>
      <Button
        style={{
          ...styles.button,
          ...(color === 'blue' ? styles.buttonBlue : {}),
        }}
      >
        {'New Incidence Form'}
      </Button>
      <Button
        style={{
          ...styles.button,
          ...(color === 'blue' ? styles.buttonBlue : {}),
        }}
      >
        {'Incidence List'}
      </Button>
    </React.Fragment>
  );
}
