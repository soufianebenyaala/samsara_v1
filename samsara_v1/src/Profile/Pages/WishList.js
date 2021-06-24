import React, { useState, useEffect } from "react";
import DrawerSearch from "../../SearchPage/SearchResults/DrawerSearch/DrawerSearch";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: "20px",
  },
}));

const WishList = () => {
  const [loading, setLoading] = useState([]);

  const [blogs, setBlogs] = useState([]);
  const [wish, setWish] = useState([]);

  const { currentUser } = useAuth();

  const fetchBlogs = async () => {
    const response = db
      .collection("users")
      .doc(currentUser.uid)
      .collection("wishList");

    const data = await response.get();
    const products = db.collection("Allproduct");
    const whishProducts = await products.get();

    data.docs.map((item) => {
      setBlogs((blogs) => [...blogs, item.id]);
      console.log(item.id);
      whishProducts.docs.map((val) => {
        if (val.id == item.id) {
          setWish((wish) => [...wish, { id: val.id, data: val.data() }]);
        }
      });
    });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  const classes = useStyles();
  return (
    <div>
      {wish &&
        wish.map((blog) => {
          return (
            <Container className={classes.container}>
              <Paper className={classes.paper} elevation={3}>
                <DrawerSearch
                  blog={blog}
                  withoutHeart={true}
                  key={blog.id}
                  id_user={blog["data"].userUid}
                  images={blog["data"].urlimage}
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
              </Paper>
            </Container>
          );
        })}
    </div>
  );
};

export default WishList;
