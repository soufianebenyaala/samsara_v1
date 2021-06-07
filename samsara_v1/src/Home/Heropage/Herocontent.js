import React from 'react'
import Box from '@material-ui/core/Box';
import { Button, Typography } from '@material-ui/core';
import HeroSearchBar from './HeroSearchBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({heroContent: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    zIndex: '700',
    width: '100%',
    maxWidth: '1000px',
    transform: 'translateX(-50%)',
    marginTop: '-75px',
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 80px)',
      
    },
  },
  mainContent: {
    maxWidth: '690px',
    color:'#fff',
    fontWeight: 'bold'
  },
  HeroBanner:{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 30px 25px',
    background: 'rgba(0,0,0,.3)',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background .3s',
    color: '#fff',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.52)',
      textDecoration: 'underline',
    },
  },
  whiteColor: {
    color:'#fff',
  },
}));

 
function Herocontent(props) {
    const classes = useStyles(props);
    return (
        <Box className={classes.heroContent}>

        <Typography variant='h3' 
                    className={classes.mainContent} 
                    gutterBottom>
                        Make your move.
        </Typography>

        <Typography variant='h5' 
                    style={{color:'#fff'}} 
                    gutterBottom>
                        Find houses and apartments for rent.
        </Typography>
        <HeroSearchBar ></HeroSearchBar>
       
       
        <div><List>
      
            <ListItem className={classes.HeroBanner} button>
              <ListItemIcon><OfflineBoltIcon style={{ color:'#fff',height:'36px',width:'36px',marginRight: '24px'}}/></ListItemIcon>
              
              <ListItemText classes={{ primary: classes.whiteColor,
                                        secondary: classes.whiteColor }}
                            primary='Introducing Instarent'
                            secondary='Discover verified properties that you can reserve on the spot and lease entirely online!'
              />
             <Button style={{ color:'#fff',textTransform: 'none',}}>Learn more</Button>
            </ListItem>
            
        </List>
        </div>
    </Box>

    )
}

export default Herocontent
