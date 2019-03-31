import firebase from "firebase/app"; // firebase has a whole lot of other stuff that we don't need (like auth, db, messaging etc..). /app is only what we need
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC6jxK9tL8CjCuRDN_WLhbIV1RdbuKiis4",
  authDomain: "think-piece-live-ddde8.firebaseapp.com",
  databaseURL: "https://think-piece-live-ddde8.firebaseio.com",
  projectId: "think-piece-live-ddde8",
  storageBucket: "think-piece-live-ddde8.appspot.com",
  messagingSenderId: "867947427696"
};

firebase.initializeApp(config);

window.firebase = firebase; //just for 'looking around purposes' - better way for thsi will be to use node's process.env

export const firestore = firebase.firestore();
export default firebase;
