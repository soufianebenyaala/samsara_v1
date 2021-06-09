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
const RailCurentSearchView= ()=> {
const [loading, setLoading] = useState([])

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const {currentUser}=useAuth();
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [blogs,setBlogs]=useState([])
  
  
  
  const fetchBlogs=async()=>{
    const x=[]
    
    const response=db.collection('Allproduct');
    const data=await response.get();
   
    data.docs.map(item=>{
      x.push(item.data())
     
      setBlogs([blogs,item.data()])
      
      
     


    
    
    
    })
    
  }
  useEffect(() => {
    fetchBlogs();
    console.log(blogs)
  }, [])
  

  

  
    const classes=useStyles()
   
    return (
        <div className={classes.contentSection}>
            <div className={classes.StikyHeaderContainer}>
                <StikyHeader/>
                <div className={classes.listables}>
                {
        blogs && blogs.map(blog=>{
          return(
          
              <h4>{blog.address}</h4>

          )
        })
      }
               
                  

       
                       
                        
                        
                </div>
            </div>
        </div>
    )
}

export default RailCurentSearchView
