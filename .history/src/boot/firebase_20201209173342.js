// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration

      // Initialize Firebase
     let firebaseApp =  firebase.initializeApp(firebaseConfig);
     let firebaseAuth = firebase.auth();
     let firebaseDb = firebase.database();

     export { firebaseAuth, firebaseDb}
