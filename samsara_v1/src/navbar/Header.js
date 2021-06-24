import React,{useState,useEffect } from 'react'
import { fade,makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DrawerComponent from './DrawerComponent';
import SearchBar from './SearchBar';
import SignUpDialog from './SignUpDialog';
import LogInDialog from './LogInDialog';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import {useAuth} from '../contexts/AuthContext'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"
import firebase from "../firebase"



const useStyles = makeStyles((theme) => ({
 
  root: {
    flexGrow: 1,
    top: '0',
    right: '0',
    left: '0',
    
  },
  
 
  logo_img: {
    height: '32px' ,
    width: '124px' ,
    
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    border: '1px solid #d5d9dc',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sm_hidden: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  SignUp_button: {
    background: '#fff',
    textTransform: 'none'
  },
  space_button: {
    marginRight: theme.spacing(1),
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  Login_button: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    textTransform: 'none'
  },
  free_chip: {
      position: 'relative',
      color: '#068047',
      background: '#ebf6f1',
      fontSize: '9px',
      top: '-1px',
      padding: '5px 7px 4px',
      lineHeight: '1',
      marginLeft: '5px',
      borderRadius: '5px',
      fontWeight: '600',
  },
  fontColor: {
    color: props=> props.fontColor,
  },
}));
function avater({classes,currentUser,handelClickOpenSignIn,handelClickOpenSignUp,url}){
  

  if(currentUser){
    return(
      <Link to={{ pathname :"/profile"}}>
        <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
        >
      <Avatar alt="Remy Sharp" src={url}  size="medium" className={` ${classes.large} ${classes.space_button} ${classes.fontColor}`} />
      </Badge>
      </Link>
     
    );
  }else{
    return(
      <div>
          <Button href="/login" size="medium" className={`${classes.Login_button} ${classes.fontColor} ${classes.sm_hidden}`} >Log in</Button>
          <Button href="/signup" size="medium" variant="contained" className={`${classes.SignUp_button} ${classes.sm_hidden}`}>Sign up</Button>
      </div>
    );
  }
  
}
function Header(props) {
  const [url, seturl]= useState("")
   useEffect(() => {
    // Update the document title using the browser API
    async function getphoto(){
    if(currentUser){
    var storage = firebase.storage();
    var storageRef = storage.ref();
    storageRef.child('profile/'+currentUser.uid).getDownloadURL().then((URL)=>
    {
      
      seturl(URL)
      
    });
  }
  
  }
  getphoto();
    
   
  });
  const history = useHistory()
    const classes = useStyles(props);
    const searchbar=props.mySearchBar?<SearchBar  setSearch={props.setSearch} />:null
    const [openSignUp,isOpenSignUp]= useState(false);
    const handelClickOpenSignUp =()=>{
        isOpenSignUp(true);
    };
    const handelCloseSignUp=()=>{
        isOpenSignUp(false);
    };
    
    const [openSignIn,isOpenSignIn]= useState(false);
    const handelClickOpenSignIn =()=>{
        isOpenSignIn(true);
    };
    const handelCloseSignIn=()=>{
        isOpenSignIn(false);
    };
    const [error,setError]=useState("")
    const {currentUser,logout}=useAuth()

    async function handleLogout(){
      setError('')
    
      try{
        await logout()
        history.push("/")

      }
      catch{
        setError('Failed to log out')
      }




    }
    
  
  return (
    <div className={classes.root}>
      <AppBar className={props.className} position={(props.position!=null)?props.position:'static'} color={props.color}>
        <Toolbar className={props.toolbar}>
        <DrawerComponent 
        handelClickOpenSignIn={handelClickOpenSignIn} 
        handelClickOpenSignUp={handelClickOpenSignUp} 
        color={props.fontColor} />

          <IconButton component={Link} to="/">
              <img alt="myLogo" className={classes.logo_img}  src={props.Logo} />
          </IconButton>
         {searchbar}

          <div className={classes.root}/>
    
          

          {avater({classes,currentUser,handelClickOpenSignIn,handelClickOpenSignUp,url})}
          {currentUser ? 
           <Button 
           onClick={handleLogout}  
           variant="contained" 
           className={`${classes.SignUp_button} ${classes.sm_hidden}` } >
             Log out
           </Button>
          :(<div></div>)}
        
         <SignUpDialog 
         open={openSignUp} 
         handelClickOpen={handelClickOpenSignUp} 
         handelClose={handelCloseSignUp}
         />

          <LogInDialog 
          open={openSignIn} 
          handelClickOpen={handelClickOpenSignIn} 
          handelClose={handelCloseSignIn}
          />
          

        </Toolbar>
      </AppBar>
    </div>)
}

export default Header
