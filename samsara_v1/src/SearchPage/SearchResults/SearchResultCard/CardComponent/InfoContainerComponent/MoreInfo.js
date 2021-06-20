import React from 'react'
import UseStyles from '../../theme/index'
import { IconButton } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const MoreInfo = (props) => {
    const classes = UseStyles();
    const preventDefault = (event) => event.preventDefault();
  
    return(
      <div className={`${classes.hidden} ${props.hidden}`}>
          <div className={classes.overlayContent}>
            <div className={classes.header}>
              <Link className={`${classes.headerText} ${classes.TextStrong}`} href="#"  onClick={preventDefault} >
              {props.address}, {props.zip}
              </Link>
              <IconButton className={classes.verified}>
              <CheckCircleIcon color="primary" className={classes.headericon}/>
              </IconButton>
              
            </div>
            <div className={classes.LocationText}>
            <Link className={classes.adress} href="#"  onClick={preventDefault} >
              {props.address}
              </Link>
            </div>
            <Typography component="div" className={classes.overlayInfo}>
           {props.disc}
            </Typography>
            <Typography className={classes.moreDetail}>See more photos and details</Typography>
          </div>
      </div>
    );
}

export default MoreInfo
