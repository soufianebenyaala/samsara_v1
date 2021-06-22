import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import Link from "@material-ui/core/Link";
import { makeStyles } from '@material-ui/core/styles'
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

function MainListItems()  {
  const classes=useStyles()
  return(
  <div>
    <Link className={classes.noLinks}  href="/Dashboard" >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link className={classes.noLinks}  href="/products" >
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
    </Link>
    <Link className={classes.noLinks} href="/profile" >
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>
  </div>
)}

export default MainListItems
