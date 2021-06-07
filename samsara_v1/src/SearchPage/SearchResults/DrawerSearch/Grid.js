import React,{useState,useRef,useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Form from './Form';
import LogInDialog from './RequestDialog';
import Typography from "@material-ui/core/Typography";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
 
}));


export default function CenteredGrid() {
  const classes = useStyles();
 
  const [openSignIn,isOpenSignIn]= useState(false);
  const handelClickOpenSignIn =()=>{
      isOpenSignIn(true);
  };
  const handelCloseSignIn=()=>{
      isOpenSignIn(false);
  };
  const Sign_in=useRef(null);
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutsideSignIn);
    return () => {
      window.removeEventListener("mousedown",handleClickOutsideSignIn);
    }
  }, []);
  const handleClickOutsideSignIn= event=>{
    if(Sign_in.current && !Sign_in.current.contains(event.target)){
      isOpenSignIn(false);
    }
  }

  return (
    <div className={classes.root}>
      <Grid container >
      <Grid item xs={1}>
             
        </Grid>
       
        <Grid item xs={11}>
          <h2>$1,555</h2>
          <h2>77 Glen Apartments</h2>
          <Typography recuired  className={classes.pos} >
          Managed by RentSFNow
        </Typography>
        <Typography   recuired  className={classes.pos} >
        Piedmont Avenue · 77 Glen Ave, Oakland, CA 94611, USA
        VERIFIEDRENT SPECIAL

        
        </Typography>
     
        </Grid>
       



        <Grid item xs={1}>
          
        </Grid>
        <Grid style={{marginTop:'20px'}} item xs={5}>
        <Button onClick={handelClickOpenSignIn} style={{height:'50px'}} fullWidth margin="dense" variant="contained" color="primary">
        <h3>Request a tour</h3>
      </Button>
      <LogInDialog myref={Sign_in} open={openSignIn} handelClickOpen={handelClickOpenSignIn} handelClose={handelCloseSignIn}/>
          
          </Grid>
        
       
        <Grid style={{marginTop:'20px',marginLeft:'10px'}} item xs={5}>
        
      <Button onClick={handelClickOpenSignIn} style={{height:'50px'}} fullWidth margin="dense" variant="contained" color="primary">
        <h3>Apply now</h3>
      </Button>
      <LogInDialog myref={Sign_in} open={openSignIn} handelClickOpen={handelClickOpenSignIn} handelClose={handelCloseSignIn}/>
        
         <Divider></Divider>
         
       
      
        </Grid>
        <Grid item xs={1}>
             
        </Grid>
       
        <Grid item xs={10}>
          <h2>About 2400 Van Ness Avenue, SF, CA</h2>
         <div>
          <p >
          Location, Location, Location! This ground floor remodeled apartment is located 1 block off of Trendy Polk Street. Walkers Paradise (Walk Score 98)...... enjoy dinner from so many fabulous restaurants such as Gioia Pizzeria, watching your favorite sports team play at Green's Sports Bar or just strolling the shops along Polk. Rider's and Biker's Paradise, convenient to public transportation and Shuttle Stops

Featuring the following:
</p>
<p >
~ Rent controlled
</p>
<p >
~ Ground floor apartment
</p>
<p >
~ Brand new
</p>
<p >
~ Hardwood floors
</p>
<p >
~ Recessed lighting
</p>
<p >
~ New kitchen with stainless steel appliances featuring a dishwasher and microwave
</p>
<p >
~ Large living/sleeping room
</p>
<p >
~ Two closets
</p>

<p >No smoking</p>


<p >
Service or support animals which are necessary due to disability will be allowed.
</p>
        </div>      
     
        </Grid>
        <Grid item xs={1}>
             
             </Grid>
      
        
        
        
        
       
      </Grid>
    </div>
  );
}