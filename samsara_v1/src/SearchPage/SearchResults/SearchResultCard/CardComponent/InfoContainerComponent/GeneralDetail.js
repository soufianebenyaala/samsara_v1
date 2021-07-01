import React from "react";
import UseStyles from "../../theme/index";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import { IconButton } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "../../../../../store/action/productsActions";
import CloseIcon from "@material-ui/icons/Close";

const GeneralDetail = (props) => {
  const classes = UseStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <div className={classes.priceAndIcon}>
        <Typography className={classes.price} component="div">
          {" "}
          {`${props.building.price} TND`}
        </Typography>
        <div className={`${classes.icons}`}>
          <IconButton className={classes.iconBtn} onClick={props.setOpen}>
            <InfoOutlinedIcon className={classes.infoIcon} />
          </IconButton>
          <div className={classes.btnIconContainer}>
            {props.withoutHeart ? (
              <IconButton
                onClick={() => {
                  props.removeProductFromWishlist(props.id_building);
                }}
                className={classes.iconBtn}
              >
                <CloseIcon
                  className={`${classes.infoIcon} ${classes.heartIcon}`}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  props.addProductToWishlist(props.id_building);
                }}
                className={classes.iconBtn}
              >
                <FavoriteBorderIcon
                  className={`${classes.infoIcon} ${classes.heartIcon}`}
                />
              </IconButton>
            )}
          </div>
        </div>
      </div>
      <div className={classes.bedBathAge}>
        <div className={classes.bedAndBathInfo}>
          <div className={classes.bedAndBathInfo}>
            <img
              alt=""
              height="16"
              loading="lazy"
              src="https://d214hhm15p4t1d.cloudfront.net/nzr/eba3d027411e573009ffee8064fa4af6511c849d/img/bedIcon.3bf807c0.svg"
              width="16"
            />
            <Typography className={classes.bedAndBathText} component="div">
              {props.building.categorie} {props.building.NumberOfBathRooms} Beds
            </Typography>
            <img
              alt=""
              height="16"
              loading="lazy"
              src="https://d214hhm15p4t1d.cloudfront.net/nzr/eba3d027411e573009ffee8064fa4af6511c849d/img/bathIcon.4adadf28.svg"
              width="16"
            />
            <Typography className={classes.bedAndBathText} component="div">
              {props.building.NumberOfRooms} Baths
            </Typography>
          </div>
        </div>
        <Typography className={classes.AgeText} component="div">
          2h ago
        </Typography>
      </div>
      <div className={classes.header}>
        <Link
          className={`${classes.headerText} ${classes.TextStrong}`}
          href="#"
          onClick={preventDefault}
        >
          {props.building.buildingName}
        </Link>
        <CheckCircleIcon color="primary" className={classes.headericon} />
      </div>
      <div className={classes.LocationText}>
        <Link className={classes.adress} href="#" onClick={preventDefault}>
          {props.building.adress}
        </Link>
      </div>
      <div className={classes.aminities}>
        {props.building.aminities.map((ami) => (
          <Typography key={ami} className={classes.aminitie} component="div">
            {ami}
          </Typography>
        ))}
      </div>
      <div className={classes.paidPhone}>
        <PhoneInTalkIcon
          color="primary"
          style={{ height: "16px", width: "15px" }}
        />
        <Typography style={{ margineLeft: "6px" }} component="div">
          {props.building.telephone}
        </Typography>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addProductToWishlist: (product_id) =>
      dispatch(addProductToWishlist(product_id)),
    removeProductFromWishlist: (product_id) =>
      dispatch(removeProductFromWishlist(product_id)),
  };
};
const mapStateToProps = (state) => {
  return {
    userID: state.firebase.auth.uid,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GeneralDetail);
