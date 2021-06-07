import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const app = firebase.initializeApp({
  //apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  //projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //appId: process.env.REACT_APP_FIREBASE_APP_ID

  apiKey: "AIzaSyDxA5b-5t6OdSmQRQ9BIC0OQh8NR5OF24Y",
  authDomain: "pfa-project-324ed.firebaseapp.com",
  projectId: "pfa-project-324ed",
  storageBucket: "pfa-project-324ed.appspot.com",
  databaseURL:"https://pfa-project-324ed.firebaseio.com",
  messagingSenderId: "195818161328",
  appId: "1:195818161328:web:9ee6d9fd99a31a8896a775"
})

export const auth = app.auth()
export const db = firebase.firestore()
export const storage = firebase.storage();
export const storageRef = storage.ref();
export default app
