// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5dYbC9EypdwdbDXMDUZvMrksAFPmBBxg",
    authDomain: "linkedin-clone-49227.firebaseapp.com",
    projectId: "linkedin-clone-49227",
    storageBucket: "linkedin-clone-49227.appspot.com",
    messagingSenderId: "654314763170",
    appId: "1:654314763170:web:c616caafbb866ab529b8fb"
};

// Initialize Firebase
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth=firebase.auth();
export { db, auth }

//


