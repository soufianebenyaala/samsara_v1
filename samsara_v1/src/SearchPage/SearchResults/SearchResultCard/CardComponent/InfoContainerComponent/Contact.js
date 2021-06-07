import React from 'react'
import Button from '@material-ui/core/Button';
import UseStyles from '../../theme/index'
const Contact = (props) => {
    const classes = UseStyles();
    return(
      <div className={classes.contact}>
        
        <div className={classes.btnContainer}>
          <div className={classes.ctaContainer}>
          <Button onClick={props.handelClickOnTour} style={{marginRight:'10px'}} className={classes.btnMsg}>Request a tour</Button>
          <Button onClick={props.handelClickOnMessage} style={{marginLeft:'10px'}} className={classes.btnMsg}>message</Button>
          </div>
        </div>
        
      </div>
    );
}

export default Contact
