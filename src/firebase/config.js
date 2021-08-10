import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDY4JuHKpKBSDhVGPkI9xFT0mayTsGRtpc",
  authDomain: "image-gallery-28747.firebaseapp.com",
  projectId: "image-gallery-28747",
  storageBucket: "image-gallery-28747.appspot.com",
  messagingSenderId: "978394111060",
  appId: "1:978394111060:web:d640361026659e8d0ee1c1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
