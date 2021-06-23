import React from 'react'
import GeneralDetail from './InfoContainerComponent/GeneralDetail'
import MoreInfo from './InfoContainerComponent/MoreInfo'
import Contact from './InfoContainerComponent/Contact'
import UseStyles from  '../theme/index'
const InfoContainer = (props) => {
    const classes = UseStyles();
  
  return(
    <div className={classes.infoContainer}>
      <GeneralDetail
      withoutHeart={props.withoutHeart}
      price={props.price} 
      idValue={props.idValue}
      NumberOfBathRooms={props.NumberOfBathRooms}
      NumberOfRooms={props.NumberOfRooms}
      image={props.image}
      address={props.address}
      tel={props.tel}
      buildingName={props.buildingName}
      hidden={props.isHidden} setOpen={props.handelClickMoreInfo}/>
      <MoreInfo disc={props.disc} address={props.address} zip={props.zip} setOpen={props.handelClickMoreInfo} hidden={props.isHidden}/>
      <Contact handelClickOnTour={props.handelClickOnTour} handelClickOnMessage={props.handelClickOnMessage}/>
    </div>
  );
}

export default InfoContainer
