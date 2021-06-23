import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MessageIcon from '@material-ui/icons/Message';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles((theme) => ({
  noLinks:{
  textDecoration:"none",
  color:"black",
  "&:hover":{
    textDecoration:"none",
    color:"black",
  }
  }
}))

function MainListItems(props)  {
  const classes=useStyles()
  return(
  <div>
    {props.SwitchToVendor?<Link className={classes.noLinks}  to="/profile/Dashbord" >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>:null}
    {props.SwitchToVendor?<Link className={classes.noLinks}  to="/profile/Immobilier" >
      <ListItem button>
        <ListItemIcon>
          <HomeWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Immobilier" />
      </ListItem>
    </Link>:null}
    <Link className={classes.noLinks} to="/profile" >
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>
    {props.SwitchToVendor?<Link className={classes.noLinks} to="/profile/profile" >
      <ListItem button>
        <ListItemIcon>
          <NotificationsActiveIcon />
        </ListItemIcon>
        <ListItemText primary="Mes Rendez-Vous" />
      </ListItem>
    </Link>:null}
    <Link className={classes.noLinks} to="/profile/Wishlist" >
      <ListItem button>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="/profile/Wishlist" />
      </ListItem>
    </Link>
    <Link className={classes.noLinks} to="/profile/Messages" >
      <ListItem button>
        <ListItemIcon>
          <MessageIcon />
        </ListItemIcon>
        <ListItemText primary="messages" />
      </ListItem>
    </Link>
  </div>
)}

export default MainListItems
