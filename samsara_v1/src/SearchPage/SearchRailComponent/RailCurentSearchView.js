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

  const [blogs,setBlogs]=useState([])
  
  
  
  
  const fetchBlogs=async()=>{
    
    
    const response=db.collection('Allproduct');
    const data=await response.get();
   
    data.docs.map(item=>{
      const x=item.data()
      
      setBlogs(blogs =>[...blogs,x])
      console.log(blogs)
      
      
      
     


    
    
    
    })
    
  }
  
  useEffect(() => {
    fetchBlogs();
    
  }, [])
  

  

  
    
   
    return (
        <div className={classes.contentSection}>
            <div className={classes.StikyHeaderContainer}>
                <StikyHeader/>
                <div className={classes.listables}>
                {
       
       blogs && blogs.map(blog=>{
        return(
         
            <DrawerSearch price={blog.price}
            NumberOfBathRooms={blog.NumberOfBathRooms}
            NumberOfRooms={blog.NumberOfRooms}
            image={blog.urlimage[0]}
            address={blog.adress}
            tel={blog.telephone}
            disc={blog.discerption}
            zip={blog.zipcode}
            buildingName={blog.buildingName}
            
            ></DrawerSearch>
         
        )
      })

      
      }
               
                  

       
                       
                        
                        
                </div>
            </div>
        </div>
    )
}

export default RailCurentSearchView
