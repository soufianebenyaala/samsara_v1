import React, { useState } from "react";

//************* add Product **************
export const addProduct = (product) => {
  return async (dispatch, getState, { getFirebase }) => {
    //make async call to database

    const firestore = getFirebase().firestore();
    const storage = getFirebase().storage();
    var urlimage = [];
    var urlfile = [];

    await product.images.filter((image) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on("state_changed", async () => {
        await storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((urls) => {
            urlimage.push(urls);
          });
      });
    });

    await product.files.filter((image) => {
      const uploadTask = storage.ref(`files/${image.name}`).put(image);
      uploadTask.on("state_changed", async () => {
        await storage
          .ref("files")
          .child(image.name)
          .getDownloadURL()
          .then((urls) => {
            urlfile.push(urls);
          });
      });
    });

    /// pafffffffffffffffffffffffffffffffffffffffffffffffff  kaml wala tarmtak

    await firestore
      .collection("Allproduct")
      .add({
        buildingName: product.buildingName,
        adress: product.adress,
        zipcode: product.zipcode,
        price: product.price,
        NumberOfRooms: product.NumberOfRooms,
        NumberOfBathRooms: product.NumberOfBathRooms,
        urlimage: urlimage,
        urlfile: urlfile,
        categorie: product.categorie,
        aminities: product.aminities,
        discerption: product.discerption,
        latitude: product.latitude,
        longitude: product.longitude,
        telephone: product.telephone,
        userUid: product.userUid,
        createAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "ADD_PRODUCT", product });
      })
      .catch((err) => {
        dispatch({ type: "ADD_PRODUCT_ERROR", err });
      });
  };
};

//************* delete product **************
export const removeProduct = (product) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("Allproduct")
      .doc(product.id)
      .delete()
      .then(() => {
        dispatch({ type: "REMOVE_PRODUCT" });
      })
      .catch((err) => {
        dispatch({ type: "REMOVE_PRODUCT_ERR" }, err);
      });
  };
};

//************* edit product **********************
export const editProduct = (product) => {
  return async (dispatch, getState, { getFirebase }) => {
    //make async call to database

    const firestore = getFirebase().firestore();
    const storage = getFirebase().storage();
    var urlimage = [];
    var urlfile = [];

    await product.images.filter((image) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on("state_changed", async () => {
        await storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((urls) => {
            urlimage.push(urls);
          });
      });
    });

    await product.files.filter((image) => {
      const uploadTask = storage.ref(`files/${image.name}`).put(image);
      uploadTask.on("state_changed", async () => {
        await storage
          .ref("files")
          .child(image.name)
          .getDownloadURL()
          .then((urls) => {
            urlfile.push(urls);
          });
      });
    });

    /// pafffffffffffffffffffffffffffffffffffffffffffffffff  kaml wala tarmtak

    await firestore
      .collection("Allproduct")
      .doc(product.id)
      .set({
        buildingName: product.buildingName,
        adress: product.adress,
        zipcode: product.zipcode,
        price: product.price,
        NumberOfRooms: product.NumberOfRooms,
        NumberOfBathRooms: product.NumberOfBathRooms,
        urlimage: urlimage,
        urlfile: urlfile,
        categorie: product.categorie,
        aminities: product.aminities,
        discerption: product.discerption,
        latitude: product.latitude,
        longitude: product.longitude,
        telephone: product.telephone,
        userUid: product.userUid,
        createAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "EDIT_PRODUCT", product });
      })
      .catch((err) => {
        dispatch({ type: "EDIT_PRODUCT_ERROR", err });
      });
  };
};

//************* add Product To Wishlist **************
export const addProductToWishlist = (product_id) => {
  return async (dispatch, getState, { getFirebase }) => {
    //make async call to database
    const firestore = getFirebase().firestore();
    await firestore
      .collection("users")
      .doc(getState().firebase.auth.uid)
      .collection("wishList")
      .doc(product_id)
      .set({ id: product_id })
      .then(() => {
        dispatch({ type: "ADD_PRODUCT_To_Wishlist", product_id });
      })
      .catch((err) => {
        dispatch({ type: "ADD_PRODUCT_To_Wishlist_ERROR", err });
      });
  };
};

//************* remove Product From Wishlist **************
export const removeProductFromWishlist = (product_id) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("users")
      .doc(getState().firebase.auth.uid)
      .collection("wishList")
      .doc(product_id)
      .delete()
      .then(() => {
        dispatch({ type: "REMOVE_PRODUCT_FROM_Wishlist" });
      })
      .catch((err) => {
        dispatch({ type: "REMOVE_PRODUCT_FROM_Wishlist_ERR" }, err);
      });
  };
};
