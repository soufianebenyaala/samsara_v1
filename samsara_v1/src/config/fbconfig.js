import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyDxA5b-5t6OdSmQRQ9BIC0OQh8NR5OF24Y",
  authDomain: "pfa-project-324ed.firebaseapp.com",
  projectId: "pfa-project-324ed",
  storageBucket: "pfa-project-324ed.appspot.com",
  databaseURL: "https://pfa-project-324ed.firebaseio.com",
  messagingSenderId: "195818161328",
  appId: "1:195818161328:web:9ee6d9fd99a31a8896a775",
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
