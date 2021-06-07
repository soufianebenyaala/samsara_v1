import React from 'react'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';

const useStyles = makeStyles((theme) => ({
    StikyHeader:{
    position: 'fixed',
    zIndex: '1020',
    width: '710px',
    backgroundColor: '#fff',
    top: '64px',
    [theme.breakpoints.down("sm")]:{
        width: '360px',
    }
    },
    HeaderContainer:{
        margin: '0',
        padding: '20px 15px 7px',
    },
    FilterBar:{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '60px',
       
        backgroundColor: '#fff',
        borderTop: '1px solid #dfe2e4',
        borderBottom: '1px solid #dfe2e4',
        [theme.breakpoints.up('sm')]: {
            height: '54px',
        paddingTop: '0',
        borderTop: '0',
          },
    },
    FilterBarBtn:{
        paddingLeft: '15px',
        position: 'relative',
        bottom: '3px',
        zIndex: '0',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        overflowX: 'auto',
    }
}))
const FilterButton = withStyles({
    root: {
        position: 'relative',
        display: 'flex',
        flexShrink: '0',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: '6px',
        padding: '10px',
        color: '#4e5865',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '-.1px',
        whiteSpace: 'nowrap',
        background: '#fff',
        border: '.5px solid #b9bdc2',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'color .25s,border-color .25s',
        textTransform:'none',
      '&:hover': {
        color: '#2b2c2d',
        borderColor: '#2b2c2d',
      },
    },
  })(Button);
const StikyHeader = () => {
    const classes=useStyles()

    return (
        <div className={classes.StikyHeader}>
            <div className={classes.HeaderContainer}>
            <Typography variant="h5" component="h1">
            Apartments for Rent
            </Typography>
            </div>
            <div className={classes.FilterBar}>
                <div className={classes.FilterBarBtn}>
            <FilterButton startIcon={<TuneIcon/>}>
                All Filter
            </FilterButton>
            <FilterButton>
                Price
            </FilterButton>
            <FilterButton>
                Bed
            </FilterButton>
            <FilterButton>
                Bath
            </FilterButton>
            </div>
            </div>
        </div>
    )
}

export default StikyHeader
