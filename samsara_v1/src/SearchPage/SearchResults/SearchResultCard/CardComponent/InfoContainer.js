import React from "react";
import GeneralDetail from "./InfoContainerComponent/GeneralDetail";
import MoreInfo from "./InfoContainerComponent/MoreInfo";
import Contact from "./InfoContainerComponent/Contact";
import UseStyles from "../theme/index";
const InfoContainer = (props) => {
  const classes = UseStyles();

  return (
    <div className={classes.infoContainer}>
      <GeneralDetail
        withoutHeart={props.withoutHeart}
        building={props.building}
        id_building={props.id_building}
        key={props.id_building}
        hidden={props.isHidden}
        setOpen={props.handelClickMoreInfo}
      />
      <MoreInfo
        building={props.building}
        id_building={props.id_building}
        setOpen={props.handelClickMoreInfo}
        hidden={props.isHidden}
      />
      <Contact
        handelClickOnTour={props.handelClickOnTour}
        handelClickOnMessage={props.handelClickOnMessage}
      />
    </div>
  );
};

export default InfoContainer;
