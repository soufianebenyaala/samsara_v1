import React from 'react'
import UseStyles from '../theme/index'
import Chip from '@material-ui/core/Chip';

const ImageContainer = () => {
    const classes = UseStyles();
    return(
    <div className={classes.imgContainer}>
      <div className={classes.img} style={{backgroundImage: 'url(https://img.zumpercdn.com/329255235/1280x960?auto=format&fit=crop&h=211&w=375&dpr=1), url(https://img.zumpercdn.com/329255235/1280x960?auto=format&fit=crop&h=11&w=20&dpr=1)',}}>
        <div className={classes.badges}>
          <Chip style={{backgroundColor:"#911ea0",lineHeight: '9px',height:'15px',textTransform:'uppercase',color: '#fff',fontWeight: '700',padding: '3px 0px',fontSize: '10px',}}  label="featured"/>
        </div>
        <div className={classes.pill}> 
          1 of 10+
        </div>
      </div>
    </div>)
}

export default ImageContainer
