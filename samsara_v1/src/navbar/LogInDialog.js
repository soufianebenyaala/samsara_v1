import { Button, Dialog,DialogContent,DialogTitle } from '@material-ui/core'
import React,{useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {useAuth} from '../contexts/AuthContext'
import {  useHistory } from "react-router-dom"


import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
close:{
    position: 'absolute',
    top: '20px',
    right: '20px',
    display: 'flex',
},
textField: {
    width: '25ch',
  },
content:{
    padding: '30px 25px',
},
Titel:{
    paddingBottom: '20px',
    color: '#2a2b2c',
    fontWeight: '500',
    fontSize: '26px',
    lineHeight: '32px',

},
terms:{
    color: '#697179',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    display:'inline',
},
footer:{
    margin: '20px 0',

},
}))
function LogInDialog(props) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();

    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [passwordConfirm,setpasswordConfirm] = useState('');
  
    const { login,currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    console.log(email);
    async function handleSubmit(e) {
      e.preventDefault()
  
      
      console.log(email);
      try {
        setError("")
        setLoading(true)
        await login(email, password)
        history.push("/")
      } catch {
        setError("Failed to login")
        
      }
  
      setLoading(false)
    }
  


    return (
        <div >
           
            
            
            <Dialog   maxWidth='xs' open={props.open} onClose={props.handelClose} aria-labelledby="form-dialog-title">
            <DialogTitle></DialogTitle>
            
            {error && <Alert  severity="error">{error}</Alert>}
           
            <IconButton className={classes.close}  onClick={props.handelClose}><CloseIcon/></IconButton >
            <DialogContent className={classes.content}>
            <Typography className={classes.Titel}>Creat An Account</Typography>
            <form  onSubmit={handleSubmit}className={classes.form} onSubmit={handleSubmit}>
            <TextField id="email"
             fullWidth margin="normal"
              type='email' 
              id="outlined-basic"
              autoFocus
              label="Email Address" 
                variant="outlined"
                name="emailRef"
                value={email}
                onChange={e => setemail(e.target.value)}
                autoComplete="email"
                 />
                
            <TextField
             id="password"
              fullWidth margin="normal" 
              type='password' 
              id="outlined-basic" 
              label="password"  
              variant="outlined"
              onChange={e => setpassword(e.target.value)}
              autoComplete="current-password"
            
                id="password"
                name="passwordRef"
                value={password}

              
              />
             
              
            <div className={classes.footer}>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Typography className={classes.terms}>By creating an account, you agree to Zumper's <Link href="#" onClick={preventDefault}>Terms and Conditions</Link> and <Link href="#" onClick={preventDefault}>Privacy Policy</Link>.*</Typography>
               
            </div>
           
            <Button
            disabled={loading}
             type="submit" 
             style={{width:'100%',
                            color: '#fff',
                            background: '#2e64e2',
                            boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
                           textTransform:'none' }}
                            variant="contained" 
                            color="primary"

                            
                            >
            Log In
            </Button>
            </form>
            <Divider style={{margin: '30px 0',}}/>
            <Typography style={{color: '#697179',
                                fontWeight: '400',
                                fontSize: '16px',
                                lineHeight: '21px',}}>Already have an account? <Link href="#" onClick={preventDefault}>
                                Sign in
                              </Link> </Typography>
          </DialogContent>
        </Dialog>
        
        </div>
        
    )
}

export default LogInDialog
