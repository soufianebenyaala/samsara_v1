import React from 'react'
import DrawerSearch from '../SearchResults/DrawerSearch/DrawerSearch';
import { makeStyles } from '@material-ui/core/styles';
import StikyHeader from './StikyHeader'
import SearchResults from '../SearchResults/SearchResultCard/SearchResults';
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
const RailCurentSearchView= ()=> {
    const classes=useStyles()
    return (
        <div className={classes.contentSection}>
            <div className={classes.StikyHeaderContainer}>
                <StikyHeader/>
                <div className={classes.listables}>
                        <DrawerSearch/>
                        <DrawerSearch/>
                        <DrawerSearch/>
                        <DrawerSearch/>
                </div>
            </div>
        </div>
    )
}

export default RailCurentSearchView
