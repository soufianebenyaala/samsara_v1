import React from 'react'
import GeneralDetail from './InfoContainerComponent/GeneralDetail'
import MoreInfo from './InfoContainerComponent/MoreInfo'
import Contact from './InfoContainerComponent/Contact'
import UseStyles from  '../theme/index'
const InfoContainer = (props) => {
    const classes = UseStyles();
  
  return(
    <div className={classes.infoContainer}>
      <GeneralDetail hidden={props.isHidden} setOpen={props.handelClickMoreInfo}/>
      <MoreInfo setOpen={props.handelClickMoreInfo} hidden={props.isHidden}/>
      <Contact handelClickOnTour={props.handelClickOnTour} handelClickOnMessage={props.handelClickOnMessage}/>
    </div>
  );
}

export default InfoContainer
