import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
    listItemContainer:{
      margin: '10px 0',
    },
    listItem:{
      width: '100%',
      margin: '0 auto',
      padding: '0',
      overflow: 'hidden',
      background: '#fff',
      border: '.5px solid #dfe2e4',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'box-shadow .15s',
      '&:hover':{
        boxShadow: '0 2px 12px rgb(173 178 194 / 16%)',
        '& $img':{
          transform: 'scale3d(1.02,1.02,1)',
        },
        '& $pill':{
          visibility: 'visible',
          opacity: '1',
        },
      },
    },
    img:{
      width: '100%',
      height: '100%',
      minHeight:"300px",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      transition: 'transform .15s',
      [theme.breakpoints.down("sm")]:{
        minHeight: '200px'
      }
    },
    card:{
      [theme.breakpoints.down("up")]:{
        height:'300px',
      },
      
      [theme.breakpoints.down("sm")]:{
        minHeight:'100%'
      }
    },
    content:{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down("sm")]:{
        flexDirection: 'column',
      }
    },
    imgContainer:{
      position: 'relative',
    flex: '1 1',
    minWidth: '325px',
    height: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    minHeight:'250px',
      [theme.breakpoints.down("sm")]:{
        minWidth: '100%',
        minHeight: '200px',
        borderBottomLeftRadius: '0',
        borderTopRightRadius: '5px',
      }
    },
    badges:{
      position: 'absolute',
      top: '10px',
      left: '15px',
    },
    pill:{
      position: 'absolute',
      bottom: '15px',
      left: '15px',
      padding: '6px 11px',
      color: '#fff',
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '100%',
      background:'rgba(0,0,0,.4)',
      borderRadius: '50px',
      visibility: 'hidden',
      opacity: '0',
      transition: 'opacity .15s',
    },
    infoContainer:{
      display: 'flex',
      flex: '1 1',
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: '53%',
      height: '100%',
      padding: '14px',
      borderRadius: '0 0 8px 8px',
      [theme.breakpoints.down("sm")]:{
        minWidth: '100%',
      }
    },
    priceAndIcon:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    price:{
      marginRight: '10px',
      color: '#088752',
      fontSize: '22px',
    },
    icons:{
      display: 'flex',
      alignItems: 'center',
    },
    bedBathAge:{
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginTop: '10px',
    },
    bedAndBathInfo:{
      display: 'flex',
      alignItems: 'center',
    },
    AgeText:{
      color: '#697179',
      fontSize: '13px',
    },
    bedAndBathText:{
      color: '#4e5865',
      fontSize: '15px',
      lineHeight: '100%',
      margin: '0 16px 0 6px',
    },
    header:{
      display: 'flex',
      alignItems: 'center',
      marginTop: '15px',
    },
    headerText:{
      marginRight: '5px',
      overflow: 'hidden',
      color: '#2b2c2d',
      fontSize: '15px',
      lineHeight:'120%',
      whiteSpace: 'nowrap',
      textOverflow: 'Ellipsis',
      textDecoration: 'none',
      '&:hover':{
        color: '#1c3c88',
        textDecoration: 'none',
      }
    },
    TextStrong:{
      fontWeight: '700',
    },
    headericon:{
      height: '15px',
      aspectRatio:' auto 15 / 15',
      width: '15px',
    },
    LocationText:{
      display: 'flex',
      marginTop: '12px',
      color: '#697179',
      fontSize: '15px',
      lineHeight: '120%',
      whiteSpace: 'nowrap',
    },
    adress:{
      display:' block',
      overflow:' hidden',
      color: '#697179',
      textOverflow:' ellipsis',
      textDecoration: 'none',
  
      '&:hover':{
        textDecoration: 'none',
        color: '#697179',
      }
    },
    aminities:{
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '15px',
    },
    aminitie:{
      marginRight: '4px',
      padding: '4px 6px',
      color: '#356dab',
      fontSize: '13px',
      lineHeight: '100%',
      verticalAlign: 'middle',
      backgroundColor: '#e2f1f8',
      borderRadius: '4px',
    },
    paidPhone:{
      display: 'inline-flex',
      alignItems: 'center',
      marginTop: '15px',
      color: '#4e5865',
      fontSize: '15px',
    },
    hidden:{
      position: 'absolute',
      zIndex: '-100',
      maxWidth: '49%',
      height: '100%',
      marginTop: '-10px',
      color: '#000',
      background: '#fff',
    },
    hiddenNoMore:{
      zIndex: '100',
    },
    overlayContent:{
      maxWidth: '340px',
      height: '100%',
      background: '#fff',
    },
    verified:{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      height: '15px',
      margin: '0',
      padding: '0',
      border: 'none',
      background: 'transparent',
    },
    overlayInfo:{
      display: '-webkit-box',
      paddingTop: '8px',
      overflow: 'hidden',
      fontSize: '15px',
      lineHeight: '150%',
      lineHeight: '175%',
      WebkitLineClamp: '5',
      lineHeight: '175%',
    },
    moreDetail:{
      paddingTop: '3px',
      color: '#2e64e2',
      fontSize: '15px',
    },
    contact:{
      marginBottom:'12px'
    },
    btnContainer:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    btnMsg:{
      zIndex: '200',
      flex: '2 2',
      width: '100%',
      height: '36px',
      fontWeight: '600',
      fontSize: '14px',
      color: '#fff',
      backgroundColor: '#2e64e2',
      '&:hover':{
        backgroundColor: '#2457b9',
      }
    },
    ctaContainer:{
      display: 'flex',
      width: '100%',
    },
    iconBtn:{
      position: 'relative',
      zIndex: '200',
      display: 'flex',
      alignItems: 'center',
      padding: '0',
      background: 'none',
      border: '0',
      cursor: 'pointer',
    },
    infoIcon:{
      opacity: '.4',
      '&:hover':{
        opacity: '1',
      }
    },
    heartIcon:{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      padding: '0',
      backgroundColor: 'transparent',
      border: 'none',
      outlineOffset: '-4px',
      cursor: 'pointer',
    },
    btnIconContainer:{
      position: 'relative',
      zIndex: '200',
      marginLeft: '10px',
    }
  }));

  export default UseStyles;