import { toast } from "react-toastify";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      toast.success("Added a building");
      console.log("ADD_PRODUCT", action.product);
      return state;
    case "ADD_PRODUCT_ERROR":
      toast.error("An error occurred");
      console.log("ADD_PRODUCT_ERROR", action.err);
      return state;
    case "REMOVE_PRODUCT":
      toast.success("Delete a building");
      console.log("REMOVE_PRODUCT");
      return state;
    case "REMOVE_PRODUCT_ERR":
      toast.error("An error occurred");
      console.log("REMOVE_PRODUCT_ERR");
      return state;
    case "EDIT_PRODUCT":
      toast.success("Edit a building");
      console.log("EDIT_PRODUCT", action.product);
      return state;
    case "EDIT_PRODUCT_ERROR":
      toast.error("An error occurred");
      console.log("EDIT_PRODUCT_ERROR", action.err);
      return state;
    case "ADD_PRODUCT_To_Wishlist":
      toast.success("Added a building To Wishlist");
      console.log("ADD_PRODUCT_To_Wishlist", action.product);
      return state;
    case "ADD_PRODUCT_To_Wishlist_ERROR":
      toast.error("An error occurred");
      console.log("ADD_PRODUCT_To_Wishlist_ERROR", action.err);
      return state;
    case "REMOVE_PRODUCT_FROM_Wishlist":
      toast.success("Delete a building from Wishlist");
      console.log("REMOVE_PRODUCT_FROM_Wishlist");
      return state;
    case "REMOVE_PRODUCT_FROM_Wishlist_ERR":
      toast.error("An error occurred");
      console.log("REMOVE_PRODUCT_FROM_Wishlist_ERR");
      return state;
    default:
      return state;
  }
};

export default productsReducer;
