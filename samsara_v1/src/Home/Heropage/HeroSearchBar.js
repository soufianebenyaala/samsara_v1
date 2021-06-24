import React,{useState,useRef,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Button, ListSubheader } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      display:'flex',
      
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.common.white,
      width:'100%',
      height:'68px',
      border: '1px transpirent',
      '&:hover': {
        
        
      },
      marginLeft: 0,
      [theme.breakpoints.up('sm')]: {
        //marginLeft: theme.spacing(3),
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
      width: '100%',
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
    divider: {
        flexGrow: 1,
    },
    searchButton:{
        width: '150px',
        height: '100%',
        padding: '8px 15px 6px',
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '19px',
        borderRadius: '0 5px 5px 0',
        textTransform: 'none',
        background: '#2e64e2',
        [theme.breakpoints.down('sm')]: {
            display:'none',
            
          },
    },
    popoverStyle: {
      position: 'relative',
      maxWidth: '1000px',
      boxSizing:'border-box',
      width: '100%',
      marginTop: '5px',
      background: '#fff',
      borderRadius: '3px',
      boxShadow: '0 0 0 1px rgba(6,44,82,.1),0 2px 16px 0 rgba(33,43,54,.08)',
      cursor: 'default',
      zIndex:'1060',
      pointerEvents:'all',
      visibility:'visible',
      opacity:'1',      
  },
  Popular:{
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '130px',
    padding: '10px 15px',
    boxSizing:'border-box',

},
  region:{
    flex: '0 0 20%',
    width: '20%',
    paddingTop: '1px',
    paddingRight: '10px',
    color: '#4f5c68',
    fontSize: '13px',
    lineHeight: '13px',
    letterSpacing:'.2px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    boxSizing:'border-box',
  },
  autocompleteSearch:{
    maxWidth: '1000px',
    height: '68px',
  },
  }));
const HeroSearchBar = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const id = anchorEl ? 'hidden' : undefined;
    const searchContainer=useRef(null);
    useEffect(() => {
      window.addEventListener("mousedown", handleClickOutside);
      return () => {
        window.removeEventListener("mousedown",handleClickOutside);
      }
    }, []);
    const handleClickOutside= event=>{
      if(searchContainer.current && !searchContainer.current.contains(event.target)){
        setAnchorEl(false);
      }
    }
    const RegionList=["Atlanta Apartments","Austin Apartments","Baltimore Apartments","Boston Apartments","Charlotte Apartments","Chicago Apartments", "Dallas Apartments","Denver Apartments","Detroit Apartments","Houston Apartments","Las Vegas Apartments","Los Angeles Apartments","Miami Apartments","Minneapolis Apartments","New York Apartments","Philadelphia Apartments","Phoenix Apartments","Pittsburgh Apartments","Portland Apartments","San Antonio Apartments","San Diego Apartments","San Francisco Apartments","Seattle Apartments", "Tampa Apartments ","Washingt on DC Apartments"];    
    const [searchIndex,setSearchIndex]=useState("")
    console.log(searchIndex)
    return (
      <div className={classes.autocompleteSearch}>
        <div className={classes.search} ref={searchContainer}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          aria-describedby={id}
          onClick={handleClick}
          onChange={e => setSearchIndex(e.target.value)}
          inputProps={{ 'aria-label': 'search' }}
        ></InputBase>
       
        <div className={classes.divider}></div>
        <Button href={"/search/?searchIndex="+searchIndex} size='large' className={classes.searchButton} variant="contained" color="primary">Chercher</Button>
        </div>
        {anchorEl && <Box  className={classes.popoverStyle}>
                        <ListItem button>
                        <ListItemIcon><TelegramIcon style={{ height:'36px',width:'36px',marginRight: '24px'}}/></ListItemIcon>
                                      
                                      <ListItemText 
                                                    primary='Use my current location'
                                      />
                        </ListItem>
                        <ListSubheader>We’ve got Homes and Apartments for Rent in Popular Cities.</ListSubheader>
                        <div className={classes.Popular}>
                            {RegionList.map((reg) =>(
                                <Link className={classes.region}>{reg}</Link>
                            ))}
                        </div>
                      </Box>}
        </div>
    )
}

export default HeroSearchBar
