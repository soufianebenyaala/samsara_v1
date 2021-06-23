import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  Error:{
    backgroundImage: "url(https://www.yellowheadinc.com/wp-content/uploads/2018/01/404-error-page.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "50%",
  }
}));

const Error = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.Error} container>
            {/* https://www.yellowheadinc.com/wp-content/uploads/2018/01/404-error-page.jpg */} 
        </Grid>
    )
}

export default Error
