import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDNxZb0o1rRhBbASt12F5yIfLx21AX_Lpg",
    authDomain: "e-ride-182e5.firebaseapp.com",
    projectId: "e-ride-182e5",
    storageBucket: "e-ride-182e5.appspot.com",
    messagingSenderId: "970797434910",
    appId: "1:970797434910:web:0b7350865763d10e71860f"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
