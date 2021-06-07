import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {   Button, CardContent, Paper, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    landigSection:
    {
        maxWidth: '1440px',
        margin: '0 auto',
        background: 'linear-gradient(180deg, #F6F9FC 0%, rgba(248, 248, 248, 0) 100%)',
        overflow: 'hidden',
    },
    instrant:{
        padding: '66px 40px 50px',
        textAlign: 'center',
    },
    instrant_into:{
        maxWidth: '560px',
        margin: '0 auto',
        textAlign: 'center',
    },
    instrant_intro_text:{
        margin: '0 0 40px',
        fontSize: '18px',
        color: '#0d1e44',
        lineHeight: '1.6',
    },
    locations:{
        margin: '0 0 50px',
    },
    locationsBorder:{
        width: '100%',
        height: '4px',
        background: 'linear-gradient(179.17deg,#3879f9 18.15%,#b659ff 91.71%)',
        borderRadius: '10px 10px 0 0',
    },
    locationContent:{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '45px 55px',
        background: '#fff',
        borderRadius: '0 0 10px 10px',
    },
    region:{
        paddingRight: '30px',
        color: '#000',
        fontWeight: '600',
        fontSize: '26px',
        lineHeight: '1.8',
    },
    feature_header:{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginBottom: '42px',
    },
    custom_devider:{
        flex: '1 1',
        position: 'relative',
        top: '1px',
        height: '1px',
        background: 'linear-gradient(179.68deg,#3879f9 18.15%,#b659ff 91.71%)',
    },
    feature_text:{
        padding:' 0 22px',
        fontSize: '18px',
        lineHight: '1.4',
        color: '#0d1e44',
        textTransform: 'uppercase',
    },
    feature:{
        [theme.breakpoints.down('sm ')]: { 
            display:'none',
        }
    },
    feature_content:{
        display: 'flex',
        marginBottom: '40px',
    },
    feature_feature:{
        flex: '1 1',
        textAlign: 'center',
        margin: '0 25px',
    },
    feature_name:{
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '1.2',
    },
    feature_desicription:{
        fontSize: '18px',
        lineHeight: '1.6',
    },
    feature_learn_more:{
        color: '#fff',
        backgroundColor: '#2e64e2',
        textTransform:'none',
        width: '225px',
        marginBottom: '33px',
        fontSize: '18px',
        fontWeight: '600',
    "&:hover": {
      backgroundColor: '#2452bc',
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: '#2452bc'
      }
    }
    },
    instrant_landlord:{
        textAlign: 'center',
        color: '#697179',
        fontSize: '18px',
        lineHeight: '1.4',
    }
}))
function LandingSectionHideOverflow() {
    const classes=useStyles();
    const Region=['New York',
    'Chicago',
    'Montreal',
    'Toronto',
    'Los Angeles',
    'Vancouver',
    'San Francisco',
    'Philadelphia',
    'Denver',
    'San Diego',];
    const preventDefault = (event) => event.preventDefault();
    return (
        <Container className={classes.landigSection}>
            <div className={classes.instrant}>
                <div className={classes.instrant_into}>
                    <img alt="instrant" height="37.5" width="168" src='https://d214hhm15p4t1d.cloudfront.net/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/instarent_with_text.1fa80c08.svg'/>
                    <Typography style={{marginBottom: '20px',
                                        fontSize: '40px',
                                        lineHeight: '1.4',}}variant="h2">Reserve apartments online. Only on Zumper.</Typography>
                    <p className={classes.instrant_intro_text}>Find verified properties that you can reserve on the spot and lease entirely online. Apply without competition and find out if you’re approved within 24 hours!</p>
                </div>
                <Paper className={classes.locations} elevation={3} >
                <div className={classes.locationsBorder}></div>
                <div className={classes.locationContent}>
                    {
                        Region.map((reg)=>(
                            <Link key={reg} href="#" onClick={preventDefault} underline='none' className={classes.region}>{reg}</Link>
                        ))
                    }
                </div>
                </Paper>
                <div className={classes.feature}>
                <div className={classes.feature_header}>
                        <div className={classes.custom_devider} />
                        <Typography className={classes.feature_text}>THE NEW WAY TO RENT</Typography>
                        <div className={classes.custom_devider} /> 
                </div>
                <div className={classes.feature_content}>
                <div className={classes.feature_feature}>
                            <CardContent>
                                <div className={classes.feature_name}>Tour virtually</div>
                                <div className={classes.feature_desicription}>Instarent properties offer Virtual Tours so you can explore new homes without leaving yours.</div>
                            </CardContent>
                </div>
                <div className={classes.feature_feature}>
                            <CardContent>
                            <div className={classes.feature_name}>Reserve now</div>
                            <div className={classes.feature_desicription}>Like what you see? Pay a small fee to reserve a property for 24 hours.</div>
                            </CardContent>
                </div>
                
                <div className={classes.feature_feature}>
                            <CardContent>
                            <div className={classes.feature_name}>Tour virtually</div>
                            <div className={classes.feature_desicription}>We'll email you a digital application to complete. You'll know within 24 hours if you've been approved.</div>
                            </CardContent>
                </div>
                </div>
                
                <Button variant="contained" className={classes.feature_learn_more} disableElevation>
                Learn more
                </Button>
                <Typography className={classes.instrant_landlord} component='div'>
                Landlords, lease faster and protect your rent for up to 12 months. <Link href="#" onClick={preventDefault} underline='none'>Learn more </Link>about signing up for Instarent.
                </Typography>
                </div>
            </div>
        </Container>
    )
}

export default LandingSectionHideOverflow
