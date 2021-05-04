
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDXODy0fe28sgjfczp7Yr4Qr2L2hu9FMsY",
    authDomain: "tinder-clone-6b290.firebaseapp.com",
    databaseURL: "https://tinder-clone-6b290.firebaseio.com",
    projectId: "tinder-clone-6b290",
    storageBucket: "tinder-clone-6b290.appspot.com",
    messagingSenderId: "106034484815",
    appId: "1:106034484815:web:d798aedad0ae5da6d27c3a",
    measurementId: "G-1CKECB48JZ"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const database =firebaseApp.firestore();

  export default database;