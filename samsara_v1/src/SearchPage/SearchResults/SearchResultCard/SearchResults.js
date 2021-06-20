import React,{useState} from 'react';
import ImageContainer from './CardComponent/ImageContainer'
import UseStyles from './theme/index'
import InfoConatiner from './CardComponent/InfoContainer'

const SearchResults=(props)=> {
    const classes = UseStyles();
    const [isHidden, setisHidden] = useState(null);
    const [isClicked, setClicked] = useState(false);
    const handelClickMoreInfo=()=>{
      console.log(isClicked)
      setClicked(!isClicked)
      var myclass=(isClicked)?null:(classes.hiddenNoMore)
      setisHidden(myclass)
    }
    return (
      <div className={classes.listItemContainer}>
        <div className={classes.listItem}>
          <div className={`${classes.card} ${classes.content} `}>
            <ImageContainer/>
            <InfoConatiner handelClickOnTour={props.handelClickOnTour} handelClickOnMessage={props.handelClickOnMessage} isHidden={isHidden} handelClickMoreInfo={handelClickMoreInfo}/>
          </div>
        </div>
      </div>
    )
}

export default SearchResults
