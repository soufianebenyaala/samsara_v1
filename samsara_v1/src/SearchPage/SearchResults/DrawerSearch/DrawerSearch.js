import React,{useState} from 'react'
import SearchResults from '../SearchResultCard/SearchResults'
import MessageForm from './MessageForm'
import RequestForm from './RequestForm'
const DrawerSearch = (props) => {
  const [Message, setMessage] = useState(false);
  const handelClickOnMessage=()=>{
    setMessage(true);
    
  }
  const handelCloseOfMesssage=()=>{
    setMessage(false)
  }
  const [Tour, setTour] = useState(false);
  const handelClickOnTour=()=>{
    setTour(true);
    
  }
  const handelCloseOfTour=()=>{
    setTour(false)
  }
  return (
    <div>
      <MessageForm onClose={handelCloseOfMesssage} aria-labelledby="simple-dialog-title" open={Message}/>
      <RequestForm onClose={handelCloseOfTour} aria-labelledby="simple-dialog-title" open={Tour}/>
      <SearchResults price={props.price}
      idValue={props.idValue}
      setIDbuilding={props.setIDbuilding}
      NumberOfBathRooms={props.NumberOfBathRooms}
      NumberOfRooms={props.NumberOfRooms}
      image={props.image}
      address={props.address}
      tel={props.tel}
      disc={props.disc}
      zip={props.zip}
      buildingName={props.buildingName}
      handelClickOnTour={handelClickOnTour} handelClickOnMessage={handelClickOnMessage}/>
    </div>
  )
}

export default DrawerSearch
