import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Grid, makeStyles, Typography, withStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  thumbsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },

  thumb: {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  },

  thumbInner: {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  },

  img: {
    display: "block",
    width: "auto",
    height: "100%",
  },
  dropzone: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: "2px",
    borderRadius: "2px",
    borderColor: "#848282",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  },
}));
function thumbs(props,classes){
  if(typeof(props.files) != "undefined")  {
    return(
      props.files.map((file) => (
      <div className={classes.thumb} key={file.name}>
        <div className={classes.thumbInner}>
          <img src={file.preview} className={classes.img} />
        </div>
      </div>
    )))
  }else{
    return ""
  }
}
function DragAndDrop(props) {
  const classes = useStyles();


  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop: (acceptedFiles) => {
      props.setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  }); 


  useEffect(
    () => () => {
      if(typeof(props.files)  !== "undefined")  {
      // Make sure to revoke the data uris to avoid memory leaks
      props.files.forEach((file) => URL.revokeObjectURL(file.preview));
      }
    },
    [props.files]
  );

  return (
    <section className={classes.conatainer}>
      <div {...getRootProps({ className: classes.dropzone })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className={classes.thumbsContainer}>{thumbs(props,classes)}</aside>
    </section>
  );
}

export default DragAndDrop;
