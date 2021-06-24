import React, { useState } from "react";
import ImageContainer from "./CardComponent/ImageContainer";
import UseStyles from "./theme/index";
import InfoConatiner from "./CardComponent/InfoContainer";

const SearchResults = (props) => {
  const classes = UseStyles();
  const [isHidden, setisHidden] = useState(null);
  const [isClicked, setClicked] = useState(false);
  const handelClickMoreInfo = () => {
    console.log(isClicked);
    setClicked(!isClicked);
    var myclass = isClicked ? null : classes.hiddenNoMore;
    setisHidden(myclass);
  };
  
  return (
    <div
      onClick={() => {
        if(props.setIDbuilding)
        props.setIDbuilding(props.idValue);
      }}
      className={classes.listItemContainer}
    >
      <div className={classes.listItem}>
        <div className={`${classes.card} ${classes.content} `}>
          <ImageContainer
            image={props.image}
            handelOpenDetail={props.handelOpenDetail}
          />
          <InfoConatiner
          blog={props.blog}
          key={props.key}
          id_building={props.id_building}
          IDbuilding={props.IDbuilding}
            withoutHeart={props.withoutHeart}
            idValue={props.idValue}
            price={props.price}
            NumberOfBathRooms={props.NumberOfBathRooms}
            NumberOfRooms={props.NumberOfRooms}
            address={props.address}
            tel={props.tel}
            
            disc={props.disc}
            zip={props.zip}
            buildingName={props.buildingName}
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
