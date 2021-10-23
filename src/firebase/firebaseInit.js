import firebase from "firebase/app";
import "firebase/firetore";


const firebaseConfig = {
    apiKey: "AIzaSyDP0GKZ2gtA8VBISGEurJKvfbwaG7a7zu8",
    authDomain: "falgun-656a8.firebaseapp.com",
    projectId: "falgun-656a8",
    storageBucket: "falgun-656a8.appspot.com",
    messagingSenderId: "265357891612",
    appId: "1:265357891612:web:39c94541e017724b2027d9",
    measurementId: "G-7ZHVM55005"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export {timestamp}
  export default firebaseApp.firestore();