import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
  apiKey: "AIzaSyCoYG5LEYp80N0iyhbdS9dwq1uTCTHvLTU",
  authDomain: "project-71-a6407.firebaseapp.com",
  projectId: "project-71-a6407",
  storageBucket: "project-71-a6407.appspot.com",
  messagingSenderId: "419882989319",
  appId: "1:419882989319:web:f056565368ed2afc29f7a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
