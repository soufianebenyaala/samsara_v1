import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid  ,Container
} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  Error:{
    backgroundImage: "url(https://www.yellowheadinc.com/wp-content/uploads/2018/01/404-error-page.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "50%",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: "100%",

  },
}));

const Error = () => {
    const classes = useStyles();

    return (
      <Container maxWidth="lg" className={classes.container}>

        <Grid className={classes.Error} container>
            {/* https://www.yellowheadinc.com/wp-content/uploads/2018/01/404-error-page.jpg */} 
        </Grid>
        </Container>
    )
}

export default Error
