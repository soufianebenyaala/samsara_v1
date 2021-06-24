import React, { useState } from "react";
import DrawerSearch from "../SearchResults/DrawerSearch/DrawerSearch";
import { makeStyles } from "@material-ui/core/styles";
import StikyHeader from "./StikyHeader";
import { SpeakerGroupSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  contentSection: {
    width: "100%",
    height: "100%",
    background: "#fff",
  },
  StikyHeaderContainer: {
    paddingTop: "180px",
  },
  listables: {
    minHeight: "calc(100% - 210px)",
    margin: "0 15px 2px",
  },
}));
function RailCurentSearchView(props) {
  const classes = useStyles();
  
  
  const search=props.search
  const value=props.value
  const nbrBath=props.nbrBath
  
  return (
    <div className={classes.contentSection}>
      <div className={classes.StikyHeaderContainer}>
        <StikyHeader setValue={props.setValue}
        setNbrBath={props.setNbrBath} />
        
        <div className={classes.listables}>
          {props.blogs &&
            props.blogs.filter((val)=>{
              const find =(val["data"].buildingName+val["data"].adress+val["data"].state)
              
 
              

              if(search==""){
                if(value=='all'){
                  if(nbrBath=="all"){
                    return val

                  }else if(nbrBath==val["data"].NumberOfRooms){
                    return val
                  }
                  
                  
                }
                else if(value==val["data"].NumberOfRooms){
                  if(nbrBath=="all"){
                    return val

                  }else if(nbrBath==val["data"].NumberOfRooms){
                    return val
                  }
  
                }  
              }else if(find.toLowerCase().includes(search.toLowerCase()))  {
                if(value=='all'){
                  if(nbrBath=="all"){
                    return val

                  }else if(nbrBath==val["data"].NumberOfRooms){
                    return val
                  }
                  
                  
                }
                else if(value==val["data"].NumberOfRooms){
                  if(nbrBath=="all"){
                    return val

                  }else if(nbrBath==val["data"].NumberOfRooms){
                    return val
                  }
  
                }  
              }
            }).map((blog) => {
              console.log(blog.id)
              return (
                <DrawerSearch
                  key={blog.id}
                  id={blog.id}
                  id_user={blog["data"].userUid}
                  idValue={blog.id}
                  setIDbuilding={props.setIDbuilding}
                  price={blog["data"].price}
                  NumberOfBathRooms={blog["data"].NumberOfBathRooms}
                  NumberOfRooms={blog["data"].NumberOfRooms}
                  image={blog["data"].urlimage[0]}
                  address={blog["data"].adress}
                  tel={blog["data"].telephone}
                  disc={blog["data"].discerption}
                  zip={blog["data"].zipcode}
                  buildingName={blog["data"].buildingName}
                ></DrawerSearch>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default RailCurentSearchView;
