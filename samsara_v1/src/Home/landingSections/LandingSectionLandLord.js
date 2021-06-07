import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    landingSection:{
        maxWidth: '1440px',
        margin: '0 auto',
        background: '#fff',
        [theme.breakpoints.down('sm')]:{
        maxWidth:'100%',
    },
    },
    landingSectionContent:{
        
        maxWidth: '1100px',
        margin: '0 auto',
        [theme.breakpoints.down('md')]:{
            width: '100%',
            maxWidth: '100%',
            padding: '0 40px',
        },
        [theme.breakpoints.down('sm')]:{
            padding: '0 20px',
        },
    },
}))
function LandingSectionLandLord() {
    const classes=useStyles()
    return (
        <div className={classes.landingSection}>
            <div className={classes.landingSectionContent}>
                <div className={classes.landlord}>
                    <Typography component='h2' variant='h2'>Reach quality renters and <br/>fill vacancies faster.</Typography>
                </div>
            </div>
        </div>
    )
}

export default LandingSectionLandLord
