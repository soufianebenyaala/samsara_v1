import React from 'react'
import Header from '../../navbar/Header';
import { makeStyles } from '@material-ui/core/styles';
import {AuthProvider} from "../../contexts/AuthContext"


const useStyles = makeStyles((theme) => ({
    root:{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '550px',
        maxHeight: '1600px',
        backgroundImage: 'linear-gradient(180deg,#605a5b,#706869,#817776,#918684,#a29591)',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
    },
    prograssiveBackground: {
        minHeight: '100%',
        minWidth: '100%',
      },
      heroBackground: props=>({ 
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        position: 'absolute',
        backgroundImage: `url(${props.image})`
      }),
    
  }));
 
function Hero(props){
    const classes = useStyles(props);
   
    return (
        <div className={classes.root}>
            <AuthProvider>
            
            <div className={classes.prograssiveBackground}>
            
            <div className={classes.heroBackground} ></div>
            <Header  fontColor='#fff' color='transparent' Logo={props.logo}/>
            </div>
            
            {props.content}
            </AuthProvider>
            
        </div>
        
        
    ) 
}

export default Hero
