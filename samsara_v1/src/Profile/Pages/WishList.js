import React,{useState,useEffect} from "react";
import DrawerSearch from "../../SearchPage/SearchResults/DrawerSearch/DrawerSearch";
import {useAuth} from '../../contexts/AuthContext'
import { db } from '../../firebase';

const WishList = () => {
  const [loading, setLoading] = useState([])
  
  const [blogs,setBlogs]=useState([])
  const [wish,setWish]=useState([])
 
  const { currentUser } = useAuth()
  
  const fetchBlogs=async()=>{
    const response=db.collection('users').doc(currentUser.uid).collection("wishList");
   
    const data=await response.get();
      const products=db.collection('Allproduct');
    const whishProducts=await products.get();
  
   

    data.docs.map(item=>{
      
     
      setBlogs(blogs =>[...blogs,item.id])
      console.log(item.id)
      whishProducts.docs.map(val=>{
      
        if(val.id==item.id){
          setWish(wish =>[...wish,val.data()])
          

        }
        
       
        
       
            
            
  
        
        })
      
      
      
      
    });
  

    
    
    
    
  }
  useEffect(() => {
    fetchBlogs(); 
    
  
  }, [])
  return <div>
     {wish &&
            wish.map((blog) => {

              return (
                <DrawerSearch
                key={blog.id}
                  id={blog.id}
                  id_user={blog.userUid}
                  idValue={blog.id}
             
                  price={blog.price}
                  NumberOfBathRooms={blog.NumberOfBathRooms}
                  NumberOfRooms={blog.NumberOfRooms}
                  image={blog.urlimage[0]}
                  address={blog.adress}
                  tel={blog.telephone}
                  disc={blog.discerption}
                  zip={blog.zipcode}
                  buildingName={blog.buildingName}
                
                ></DrawerSearch>
              );
            })}
    
  </div>;
};

export default WishList;




