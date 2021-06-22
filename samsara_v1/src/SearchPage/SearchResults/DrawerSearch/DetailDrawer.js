import React from "react";
import Drawer from "@material-ui/core/Drawer";

const DetailDrawer = (props) => {
  return (
    <>
      <Drawer open={props.OpenDetail}></Drawer>
    </>
  );
};

export default DetailDrawer;
