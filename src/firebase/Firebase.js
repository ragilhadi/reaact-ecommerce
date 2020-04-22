import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBG4eiTCv6uBVH4rzftHMIPj9BIhZAdoTQ",
  authDomain: "react-ecommerce-9b9d7.firebaseapp.com",
  databaseURL: "https://react-ecommerce-9b9d7.firebaseio.com",
  projectId: "react-ecommerce-9b9d7",
  storageBucket: "react-ecommerce-9b9d7.appspot.com",
  messagingSenderId: "848569525059",
  appId: "1:848569525059:web:c3d6a42a1db461467785f6",
  measurementId: "G-78X2V4ECST",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
