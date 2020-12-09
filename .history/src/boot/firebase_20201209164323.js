// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
        apiKey: "AIzaSyBxqG51NTU-3plKc8vunXDmKR5ss1l1-M8",
        authDomain: "smackchat-7104f.firebaseapp.com",
        projectId: "smackchat-7104f",
        storageBucket: "smackchat-7104f.appspot.com",
        messagingSenderId: "244332313508",
        appId: "1:244332313508:web:fedcf661ae71764dae9f31"
      };
      // Initialize Firebase
     let firebaseApp =  firebase.initializeApp(firebaseConfig);
     let 
