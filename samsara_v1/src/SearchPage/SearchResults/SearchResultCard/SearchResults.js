import React, { useState } from "react";
import ImageContainer from "./CardComponent/ImageContainer";
import UseStyles from "./theme/index";
import InfoConatiner from "./CardComponent/InfoContainer";

const SearchResults = (props) => {
  const classes = UseStyles();
  const [isHidden, setisHidden] = useState(null);
  const [isClicked, setClicked] = useState(false);
  const handelClickMoreInfo = () => {
    setClicked(!isClicked);
    var myclass = isClicked ? null : classes.hiddenNoMore;
    setisHidden(myclass);
  };
  //building
  //id_building
  return (
    <div
      onClick={() => {
        if (props.setIDbuilding) props.setIDbuilding(props.id_building);
      }}
      className={classes.listItemContainer}
    >
      <div className={classes.listItem}>
        <div className={`${classes.card} ${classes.content} `}>
          <ImageContainer
            image={props.building.urlimage[0]}
            handelOpenDetail={props.handelOpenDetail}
          />
          <InfoConatiner
            withoutHeart={props.withoutHeart}
            building={props.building}
            id_building={props.id_building}
            key={props.id_building}
            handelClickOnTour={props.handelClickOnTour}
            handelClickOnMessage={props.handelClickOnMessage}
            isHidden={isHidden}
            handelClickMoreInfo={handelClickMoreInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
