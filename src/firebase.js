// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDk-hktYiXqI2cHerhgLr4fIvezxoFJr30",
  authDomain: "linkedin-clone-251be.firebaseapp.com",
  projectId: "linkedin-clone-251be",
  storageBucket: "linkedin-clone-251be.appspot.com",
  messagingSenderId: "30234735425",
  appId: "1:30234735425:web:2d84998bbabf0ca3b5e7c0",
  measurementId: "G-JREKDBNG5V"
  };
  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
