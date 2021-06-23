import React, { useState } from "react";
import SearchResults from "../SearchResultCard/SearchResults";
import DetailDrawer from "./DetailDrawer";
import MessageForm from "./MessageForm";
import RequestForm from "./RequestForm";

const DrawerSearch = (props) => {
  const [openDetail, setOpenDetail] = useState(false);
  const handelOpenDetail = (name) => {
    setOpenDetail(true);
  };
  const handelCloseDetail = () => {
    setOpenDetail(false);
  };
  const [Message, setMessage] = useState(false);
  const handelClickOnMessage = () => {
    setMessage(true);
  };
  const handelCloseOfMesssage = () => {
    setMessage(false);
  };
  const [Tour, setTour] = useState(false);
  const handelClickOnTour = () => {
    setTour(true);
  };
  const handelCloseOfTour = () => {
    setTour(false);
  };

  return (
    <div>
      <MessageForm
        id_building={props.idValue}
        id_user={props.id_user}
        onClose={handelCloseOfMesssage}
        aria-labelledby="simple-dialog-title"
        open={Message}
      />
      <RequestForm
        id_building={props.idValue}
        id_user={props.id_user}
        price={props.price}
        image={props.image}
        tel={props.tel}
        zip={props.zip}
        address={props.address}
        onClose={handelCloseOfTour}
        aria-labelledby="simple-dialog-title"
        open={Tour}
      />
      <DetailDrawer
        handelCloseDetail={handelCloseDetail}
        handelClickOnTour={handelClickOnTour}
        handelClickOnMessage={handelClickOnMessage}
        openDetail={openDetail}
      />
      <SearchResults
        withoutHeart={props.withoutHeart}
        price={props.price}
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
        handelClickOnTour={handelClickOnTour}
        handelClickOnMessage={handelClickOnMessage}
        handelOpenDetail={handelOpenDetail}
      />
    </div>
  );
};

export default DrawerSearch;
