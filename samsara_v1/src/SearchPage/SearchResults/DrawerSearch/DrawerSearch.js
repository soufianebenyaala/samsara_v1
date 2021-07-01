import React, { useState } from "react";
import SearchResults from "../SearchResultCard/SearchResults";
import DetailDrawer from "./DetailDrawer";
import MessageForm from "./MessageForm";
import RequestForm from "./RequestForm";
import { useAuth } from "../../../contexts/AuthContext";

const DrawerSearch = (props) => {
  const [openDetail, setOpenDetail] = useState(false);
  const { currentUser } = useAuth();
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
      {currentUser ? (
        <>
          <MessageForm
            key={"MessageForm" + props.id_building}
            building={props.building}
            id_building={props.id_building}
            onClose={handelCloseOfMesssage}
            aria-labelledby="simple-dialog-title"
            open={Message}
          />
          <RequestForm
            key={"RequestForm" + props.id_building}
            building={props.building}
            id_building={props.id_building}
            address={props.address}
            onClose={handelCloseOfTour}
            aria-labelledby="simple-dialog-title"
            open={Tour}
          />
        </>
      ) : (
        <></>
      )}
      <DetailDrawer
        key={"DetailDrawer" + props.id_building}
        building={props.building}
        id_building={props.id_building}
        handelCloseDetail={handelCloseDetail}
        handelClickOnTour={handelClickOnTour}
        handelClickOnMessage={handelClickOnMessage}
        openDetail={openDetail}
      />
      <SearchResults
        withoutHeart={props.withoutHeart}
        setIDbuilding={props.setIDbuilding}
        building={props.building}
        id_building={props.id_building}
        key={"SearchResults" + props.id_building}
        withoutHeart={props.withoutHeart}
        handelClickOnTour={handelClickOnTour}
        handelClickOnMessage={handelClickOnMessage}
        handelOpenDetail={handelOpenDetail}
      />
    </div>
  );
};

export default DrawerSearch;
