import React, { useState } from "react";
import DrawerSearch from "../SearchResults/DrawerSearch/DrawerSearch";
import { makeStyles } from "@material-ui/core/styles";
import StikyHeader from "./StikyHeader";

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
  const [value,setValue]=useState('all')
  const [nbrBath,setNbrBath]=useState('1')
  
  const search=props.search
  return (
    <div className={classes.contentSection}>
      <div className={classes.StikyHeaderContainer}>
        <StikyHeader setValue={setValue}
        setNbrBath={setNbrBath} />
        
        <div className={classes.listables}>
          {props.blogs &&
            props.blogs.filter((val)=>{
 
              

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
              }else if(val["data"].buildingName.toLowerCase().includes(search.toLowerCase()))  {
                return val
              }
            }).map((blog) => {
              return (
                <DrawerSearch
                  key={blog.id}
                  id={blog.id}
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
