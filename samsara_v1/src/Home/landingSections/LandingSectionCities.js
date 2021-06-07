import {  Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React,{useState} from 'react'
const useStyles = makeStyles((theme) => ({
    landigSection:{
        maxWidth: '1440px',
        margin: '0 auto',
        background: '#fff',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: { 
            flexWrap: 'wrap',
        }
        
    },
    cities_textcontainer:{
        width: '427px',
        height: '100%',
        padding: '121px 47px 40px 80px',
    },
    cities_header:{
        paddingTop: '12px',
        paddingBottom: '15px',
        fontWeight: '600',
        fontSize: '40px',
        lineHeight: '44px',
    },
    cities_subHeader:{
        paddingBottom: '18px',
        fontSize: '18px',
        lineHeight: '30px',
    },
    link_container:{
        position: 'relative',
        width: 'calc(100% - (100% - 1100px)/2 - 427px)',
        height: '690px',
        [theme.breakpoints.down('sm')]: { 
            width:'100%',
        }
    },
    link_text:{
        paddingBottom: '24px',
        color: '#fff',
        fontSize: '22px',
        lineHeight: '33px',
    },
    link_content:{
        position: 'absolute',
        top: '69px',
        right: '40px',
        left: '40px',
        zIndex: '10',
    },
    link_cities:{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    cities_interactedBg:{
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
    },
    cities_link_container:{
        position: 'relative',
        /*width: 'calc(100% - (100% - 1100px)/2 - 427px)',*/
        height: '690px',
        [theme.breakpoints.down('sm')]: { 
            width:'100%',
        }
    },
    popular_cities:{
        display: 'flex',
        flexWrap: 'wrap',
        
        [theme.breakpoints.down('lg')]: { 
            maxWidth:'623px',
        },
        [theme.breakpoints.down('md')]: { 
            maxWidth:'610px',
        },
        [theme.breakpoints.down('sm')]: { 
            maxWidth:'none',
        },
    },
    popular_cities_link:{
        margin:' 0 20px 20px 0',
        padding:' 8px 14px',
        color: '#000',
        fontWeight: '600',
        fontSize: '34px',
        lineHeight: '40px',
        letterSpacing: '-1px',
        whiteSpace: 'nowrap',
        background: '#fff',
        borderRadius: '3px',
        boxShadow: '0 2px 6px rgba(0,0,0,.15)',
        transition: 'all .25s ease-in',
        textTransform: 'none',
        [theme.breakpoints.down('md')]: { 
            margin: '0 10px 10px 0',
            padding: '2px 9px',
            fontSize: '24px',
        },
        "&:hover":{
            backgroundColor: "#fff"
        }
    },
    popular_cities_link_fade:{
        opacity: '.5'
    },
    popular_citieName:{
        paddingRight: '6px',
    },
    visible_interactedBg:{
        opacity: '1',
    },
    hidden_interactedBg:{
        opacity: '0',
        transition: 'opacity .25s linear',
    },
}))
function LandingSectionCities() {
    const classes=useStyles();
    const [Fade, setFade] = useState([    classes.popular_cities_link,
        classes.popular_cities_link,
        classes.popular_cities_link,
        classes.popular_cities_link,
        classes.popular_cities_link,
        classes.popular_cities_link,
        classes.popular_cities_link,
        classes.popular_cities_link,
        classes.popular_cities_link,
        classes.popular_cities_link,
        classes.popular_cities_link,
        classes.popular_cities_link,
        classes.popular_cities_link,
        classes.popular_cities_link,
    ])
    const [hidden, sethidden] = useState([    classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.visible_interactedBg,
    ])
    const defaultHidden=[    classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
        classes.hidden_interactedBg,
    ]
    const defaultFade=[    classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
        classes.popular_cities_link_fade,
    ]
    const handelHoverOnHover=(index)=>{
        var newHidden=[...defaultHidden]
        newHidden[index]=classes.visible_interactedBg
        sethidden([...newHidden])
        var newFade=[...defaultFade]
        newFade[index]=null
        setFade([...newFade])
    }
    const handelUnhover=()=>{
        var newFade=[    null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ]
        setFade([...newFade])
    }
    const cities=
    [   ['New York City','🗽'],
        ['Los Angeles','🌴'],
        ['San Francisco','🌉'],
        ['Chicago','💨'],
        ['Houston','🚀'],
        ['Boston','🐟'],
        ['Austin','🎤'],
        ['Denver','🗻'],
        ['Atlanta','🍑'],
        ['Dallas','⭐'],
        ['Toronto','🌇'],
        ['Ottawa','💂'],
        ['Montreal','🎆'],
        ['Vancouver','🌲'],
    ]
    const images=[
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/new-york-ny.jpg?auto=format&amp;fit=clip',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/los-angeles-ca.jpg?auto=format&amp;fit=clip',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/san-francisco-ca.jpg?auto=format&amp;fit=clip',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/chicago-il.jpg?auto=format&amp;fit=clip',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/houston-tx.jpg?auto=format&amp;fit=clip',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/boston-ma.jpg?auto=format&amp;fit=clip',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/austin-tx.jpg?auto=format&amp;fit=clip',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/denver-co.jpg?auto=format&amp;fit=clip',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/atlanta-ga.jpg?auto=format&amp;fit=clip',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/dallas-tx.jpg?auto=format&amp;fit=clip',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/toronto-on.jpg?auto=format&amp;fit=clip',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/ottawa-on.jpg?auto=format&amp;fit=clip',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/montreal-qc.jpg?auto=format&amp;fit=clio',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/vancouver-bc.jpg?auto=format&amp;fit=cluot',
        'https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/cities/default-city.jpg?auto=format&fit=clip'
    ]
    return (
        <div className={classes.landigSection}>
            <div className={classes.cities_textcontainer}>
            <svg height="48" width="48">
                <g fill="none" fillRule="evenodd">
                    <circle cx="24" cy="24" fill="#FFEFDD" r="24">
                    </circle>
                    <path d="M36.274 27.295a7.384 7.384 0 0 1-2.124 3.789c-1.283-7.59-6.17-7.496-6.17-14.49 0-1.588.178-3.122.484-4.594-6.848 1.606-12.028 9.064-12.028 18.035 0 .806.043 1.6.125 2.379a9.785 9.785 0 0 1-1.191-9.43A14.05 14.05 0 0 0 10 34.046c0 7.18 5.355 13.099 12.27 13.955-1.468-1.16-2.454-3.283-2.454-5.716 0-3.675 2.769-7.717 4.185-12.617 1.418 4.861 5.836 8.942 5.836 12.617 0 2.154-.775 4.063-1.97 5.279A14.058 14.058 0 0 0 38 34.045a13.99 13.99 0 0 0-1.726-6.75z" fill="#FFAC5F" fillRule="nonzero">
                    </path>
                </g>
            </svg>
            <Typography className={classes.cities_header} variant='h2' component='h2'>Our hottest cities.</Typography>
            <Typography className={classes.cities_subHeader} variant='h4' component='div'>Find sweet deals on apartments and houses for rent in our most popular locations.</Typography>
            </div>
            <div className={classes.link_container}>
                
               
                <div className={classes.cities_link_container}>
                
                {   
                    images.map((myImg,index)=>(
                        <div key={index} className={`${classes.cities_interactedBg} ${hidden[index]}`} style={{backgroundImage:`url(${myImg})`}}/>
                    ))
                }
                <div className={classes.link_content}>
                <Typography className={classes.link_text} component='div'>Choose a popular city</Typography>
                    <div className={classes.popular_cities}>
                        {
                            cities.map((citie,index)=>(
                                
                                <Button key={index} onMouseOver={()=>handelHoverOnHover(index)} onMouseOut={handelUnhover} className={`${classes.popular_cities_link} ${Fade[index]}`}><span className={classes.popular_citieName}>{citie[0]}</span><span arial-hidden='true'>{citie[1]}</span></Button>
                            ))
                        }
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default LandingSectionCities
