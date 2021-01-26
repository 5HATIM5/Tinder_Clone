import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD4SCuSi8onmlnCi7RrFEB5dTRi6lTFjbk",
    authDomain: "tinder-clone-fbfd9.firebaseapp.com",
    projectId: "tinder-clone-fbfd9",
    storageBucket: "tinder-clone-fbfd9.appspot.com",
    messagingSenderId: "1003375329043",
    appId: "1:1003375329043:web:56acdd31762023b14624e6",
    measurementId: "G-D570YR3Y66"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const database = firebaseApp.firestore();

  export default database;