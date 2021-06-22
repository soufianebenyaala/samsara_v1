import React from 'react';
import { useState ,useEffect} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import DrawerSearch from '../SearchResults/DrawerSearch/DrawerSearch';
import { makeStyles } from '@material-ui/core/styles';
import StikyHeader from './StikyHeader'
import SearchResults from '../SearchResults/SearchResultCard/SearchResults';
import { db } from '../../firebase';
import { Block } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
    contentSection:{
        width: '100%',
        height: '100%',
        background: '#fff',
    },
    StikyHeaderContainer:{
        paddingTop: '180px',
    },
    listables:{
        minHeight: 'calc(100% - 210px)',
        margin: '0 15px 2px',
    },
}))
function RailCurentSearchView (props){
  const classes=useStyles()
  
    return (
        <div className={classes.contentSection}>
            <div className={classes.StikyHeaderContainer}>
                <StikyHeader/>
                <div className={classes.listables}>

                   {props.blogs && props.blogs.map(blog=>{
                     return(
                       <DrawerSearch 
                       key={blog.id}
                       id={blog.id}
                       idValue={blog.id}
                       setIDbuilding={props.setIDbuilding}
                       price={blog["data"].price}
                       NumberOfBathRooms={blog["data"].NumberOfBathRooms}
                       NumberOfRooms={blog["data"].NumberOfRooms}
                       image={blog["data"].urlimage[0]}
                       address={blog["data"].adress}
                       tel={blog["data"].telephone}
                       disc={blog["data"].discerption}
                       zip={blog["data"].zipcode}
                       buildingName={blog["data"].buildingName}
                       ></DrawerSearch>)}
                     )
                   }
                </div>
            </div>
        </div>
    )
}

export default RailCurentSearchView
